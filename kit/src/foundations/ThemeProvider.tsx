import { useMemo, type CSSProperties, type ReactNode } from 'react';
import { kebab, tokens, type TokenOverrides } from './tokens';

const prefix: Record<string, string> = {
  colors: 'color',
  spacing: 'space',
  radius: 'radius',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  fontFamily: 'font',
  shadow: 'shadow',
  layout: 'layout',
  type: 'type',
  palette: 'palette',
};

/** numbers → px, except unitless (…Scale / …Opacity) and milliseconds (…Duration) */
const px = (v: unknown, key = '') =>
  typeof v !== 'number' ? String(v) : /(Scale|Opacity)$/.test(key) ? String(v) : /Duration$/.test(key) ? `${v}ms` : `${v}px`;

/** groups whose values reference other tokens via var(); re-declared inside a TokenScope so flow overrides reach them */
const ALIAS_GROUPS = ['button', 'iconButton', 'badge', 'pill', 'stepper', 'searchBar', 'tabBar', 'quickAdd', 'needHelp', 'sheet', 'snackbar', 'field'] as const;

/** Flattens a (partial) token tree into CSS custom properties. */
export function tokensToCssVars(t: TokenOverrides | typeof tokens, rtl = false): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [group, values] of Object.entries(t)) {
    if (!values) continue;
    for (const [key, value] of Object.entries(values as Record<string, unknown>)) {
      const name = `--nk-${prefix[group] ?? kebab(group)}-${kebab(key)}`;
      if (group === 'type' && typeof value === 'object' && value) {
        const v = value as { size: number; line: number | string; weight: number };
        vars[name] = `${v.weight} ${v.size}px/${typeof v.line === 'number' ? `${v.line}px` : v.line} var(--nk-font-family)`;
      } else if (group === 'fontWeight' || group === 'fontFamily') {
        vars[name] = String(value);
      } else {
        vars[name] = px(value, key);
      }
    }
  }
  if ('fontFamily' in t && t.fontFamily) {
    vars['--nk-font-family'] = String(rtl ? t.fontFamily.rtl : t.fontFamily.primary);
  }
  return vars;
}

/**
 * Root theme. Wrap anything rendered with kit components in this (NoonPrototype does it for you).
 * All tokens become CSS variables scoped to this element — nothing leaks into the host app.
 */
export function NoonThemeProvider({
  children,
  overrides,
  rtl = false,
  className,
  style,
}: {
  children: ReactNode;
  overrides?: TokenOverrides;
  rtl?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const vars = useMemo(() => ({ ...tokensToCssVars(tokens, rtl), ...(overrides ? tokensToCssVars(overrides, rtl) : {}) }), [overrides, rtl]);
  return (
    <div className={['nk-root', className].filter(Boolean).join(' ')} dir={rtl ? 'rtl' : 'ltr'} style={{ ...(vars as CSSProperties), ...style }}>
      {children}
    </div>
  );
}

/** Applies flow-level token overrides to a subtree (used by the Navigator per screen). */
export function TokenScope({ overrides, children }: { overrides?: TokenOverrides; children: ReactNode }) {
  const vars = useMemo(() => {
    if (!overrides) return null;
    // component/alias tokens are `var(--nk-color-…)` etc.; custom properties resolve where they are declared, so
    // re-declare them here (only when this scope overrides something they can reference) to pick up the overrides.
    const touchesRefs = Object.keys(overrides).some((g) => g !== 'layout');
    const alias = touchesRefs ? tokensToCssVars(Object.fromEntries(ALIAS_GROUPS.map((g) => [g, tokens[g]])) as TokenOverrides) : {};
    return { ...alias, ...tokensToCssVars(overrides) };
  }, [overrides]);
  if (!vars) return <>{children}</>;
  return <div style={{ ...(vars as CSSProperties), display: 'contents' }}>{children}</div>;
}

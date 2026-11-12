import type { CSSProperties } from 'react';
import { ref } from '../../foundations/tokens';
import { MaskIcon } from '../MaskIcon/MaskIcon';
import { originIconNames, originMulticolor, type OriginIconName } from './originIcons';

const files = import.meta.glob<string>('../../assets/icons/origin/*.svg', { eager: true, query: '?url', import: 'default' });
const urlOf = (name: OriginIconName) => files[`../../assets/icons/origin/${name}.svg`];
const known = new Set<string>(originIconNames);

/**
 * noon system icon from the Origin Design System (Figma wFRKiKskxZ4vjIHbDVvngJ · 6170:153, `M-Icon/System-Icon/<name>`).
 * 24×24 single-colour glyphs tinted through a CSS mask, so `color` takes any token. `filled` switches to the
 * `<name>-filled` pair when it exists (selected / active state). Catalogue: .claude/skills/noon-ui/references/icons.md.
 */
export function OriginIcon({
  name,
  filled,
  size = 24,
  color = ref.color('textPrimary'),
  className,
  style,
  label,
}: {
  name: OriginIconName;
  filled?: boolean;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  /** accessible name; icons are decorative (aria-hidden) without it */
  label?: string;
}) {
  const filledName = `${name.replace(/-v(\d+)$/, '')}-filled${name.match(/-v\d+$/)?.[0] ?? ''}`;
  const resolved = (filled && known.has(filledName) ? filledName : name) as OriginIconName;
  const src = urlOf(resolved);
  if (originMulticolor.has(resolved)) {
    return <img src={src} alt={label ?? ''} aria-hidden={label ? undefined : true} width={size} height={size} className={className} style={{ display: 'inline-block', flexShrink: 0, ...style }} draggable={false} />;
  }
  const icon = <MaskIcon src={src} size={size} color={color} className={className} style={style} />;
  return label ? (
    <span role="img" aria-label={label} style={{ display: 'inline-flex' }}>
      {icon}
    </span>
  ) : (
    icon
  );
}

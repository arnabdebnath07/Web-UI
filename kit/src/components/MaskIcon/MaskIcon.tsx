import type { CSSProperties } from 'react';

/**
 * Recolourable raster/SVG glyph: RN `<Image tintColor>` → CSS mask, so the real bappzaar webp/svg silhouettes take any colour.
 * Pass `size` for square icons or `width`/`height` (1x sizes; the assets are @3x).
 */
export function MaskIcon({ src, size, width, height, color, style, className }: { src: string; size?: number; width?: number; height?: number; color: string; style?: CSSProperties; className?: string }) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: 'inline-block',
        flexShrink: 0,
        width: width ?? size,
        height: height ?? size,
        backgroundColor: color,
        WebkitMask: `url("${src}") center / contain no-repeat`,
        mask: `url("${src}") center / contain no-repeat`,
        ...style,
      }}
    />
  );
}

import { useState, type ReactNode } from 'react';
import { OriginIcon } from '@kit/components/Icon/OriginIcon';
import { currency, formatPrice, type Product } from '@kit/data';
import expressPill from '@assets/shared/sku/pill-express.svg';
import { copy, filterChips } from '../data';
import styles from './Listing.module.css';

/** Results bar (Figma 1320:2014 / 1332:903): the summary — "5 results for Forerunner" + Clear once a series is picked — and Sort */
export function ResultsBar({ summary, onClear }: { summary: ReactNode; onClear?: () => void }) {
  return (
    <div className={styles.resultsBar}>
      <div className={styles.summary} aria-live="polite">
        <p className={onClear ? styles.summaryPicked : styles.summaryAll}>{summary}</p>
        {onClear && (
          <button type="button" className={styles.clear} onClick={onClear}>
            {copy.clear}
          </button>
        )}
      </div>
      <button type="button" className={styles.sort}>
        <OriginIcon name="sort" size={16} />
        <span>
          {copy.sortLabel}
          <b>{copy.sortValue}</b>
        </span>
        <OriginIcon name="chevron-down" size={16} />
      </button>
    </div>
  );
}

/** quick filter chips (Figma 1320:2022) */
export function FilterChips() {
  return (
    <div className={styles.chipsRow}>
      <div className={styles.chips}>
        {filterChips.map((c) => (
          <button key={c.id} type="button" className={styles.chip}>
            {c.icon && <OriginIcon name={c.icon} size={20} />}
            <span>{c.label}</span>
            {c.menu && <OriginIcon name="chevron-down" size={16} />}
          </button>
        ))}
      </div>
      <button type="button" className={styles.chipsNext} aria-label="More filters">
        <OriginIcon name="chevron-right" size={16} />
      </button>
    </div>
  );
}

/** product grid (Figma 1320:2044): 5 across at 1208, wrapping */
export function ProductGrid({ products, gridKey }: { products: Product[]; gridKey: string }) {
  const [wished, setWished] = useState<Set<string>>(() => new Set());
  const toggle = (id: string) =>
    setWished((w) => {
      const next = new Set(w);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  return (
    <ul className={styles.grid} key={gridKey}>
      {products.map((p, i) => (
        <li key={p.id} className={styles.card} style={{ animationDelay: `${Math.min(i, 9) * 30}ms` }}>
          <div className={styles.media}>
            {p.image && <img className={styles.image} src={p.image} alt="" loading={i < 10 ? 'eager' : 'lazy'} draggable={false} />}
            <button type="button" className={styles.wish} aria-pressed={wished.has(p.id)} aria-label={wished.has(p.id) ? 'Remove from wishlist' : 'Add to wishlist'} onClick={() => toggle(p.id)}>
              <OriginIcon name="heart" filled={wished.has(p.id)} size={20} />
            </button>
            <button type="button" className={styles.add} aria-label="Add to cart">
              <OriginIcon name="plus" size={16} />
            </button>
          </div>
          <div className={styles.info}>
            <a href="#" className={styles.name}>
              {p.brand} {p.title}
            </a>
            <p className={styles.price}>
              <span className={styles.currency}>{currency}</span>
              <span className={styles.amount}>{formatPrice(p.price)}</span>
            </p>
            {p.express && <img className={styles.express} src={expressPill} alt="express" height={19} />}
          </div>
        </li>
      ))}
    </ul>
  );
}

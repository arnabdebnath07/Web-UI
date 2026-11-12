import { useState } from 'react';
import { OriginIcon } from '@kit/components/Icon/OriginIcon';
import type { OriginIconName } from '@kit/components/Icon/originIcons';
import noonLogo from '../assets/logo-noon.png';
import expressPill from '@assets/shared/sku/pill-express.svg';
import promo from '../assets/promo-noon-one.png';
import { categories, copy, filterGroups, headerActions, query } from '../data';
import styles from './SiteChrome.module.css';

/** noon.com header (Figma 1320:1653): logo, delivery location, search, account actions */
export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#" aria-label="noon home">
        <img src={noonLogo} alt="noon" width={80} height={28} />
      </a>
      <button type="button" className={styles.location}>
        <OriginIcon name="location" size={20} />
        <span>{copy.location}</span>
        <OriginIcon name="chevron-down" size={16} />
      </button>
      <form className={styles.search} role="search" onSubmit={(e) => e.preventDefault()}>
        <OriginIcon name="search" size={20} />
        <input className={styles.searchInput} defaultValue={query} aria-label="Search noon" />
      </form>
      <nav className={styles.actions} aria-label="Account">
        {headerActions.map((a) => (
          <button key={a.id} type="button" className={styles.action}>
            <OriginIcon name={a.icon as OriginIconName} size={22} />
            <span dir="auto">{a.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}

/** category strip (Figma 1320:1679) with the noon One delivery promo */
export function CategoryNav() {
  return (
    <nav className={styles.categoryNav} aria-label="Categories">
      <div className={styles.categories}>
        {categories.map((c) => (
          <a key={c} href="#" className={styles.category}>
            {c}
          </a>
        ))}
      </div>
      <button type="button" className={styles.navMore} aria-label="More categories">
        <OriginIcon name="chevron-right" size={16} />
      </button>
      <a href="#" className={styles.promo}>
        <img src={promo} alt="Get Free Delivery with noon One" width={221} height={26} />
      </a>
    </nav>
  );
}

/** filters sidebar (Figma 1320:1699): Fulfilled by and Category open, the rest collapsed */
export function FiltersSidebar() {
  const [open, setOpen] = useState<Record<string, boolean>>({ fulfilled: true, category: true });
  const [express, setExpress] = useState(false);
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));
  return (
    <aside className={styles.sidebar} aria-label="Filters">
      <FilterGroup id="fulfilled" title="Fulfilled by" open={!!open.fulfilled} onToggle={toggle}>
        <label className={styles.expressOption}>
          <input type="checkbox" className={styles.checkbox} checked={express} onChange={(e) => setExpress(e.target.checked)} />
          <span className={styles.expressLabel}>
            <img src={expressPill} alt="express" height={23} />
            <span className={styles.expressSub}>Fulfilled by noon</span>
          </span>
        </label>
      </FilterGroup>
      <FilterGroup id="category" title="Category" open={!!open.category} onToggle={toggle}>
        <button type="button" className={styles.categoryOption}>
          <span className={styles.plus} aria-hidden>
            +
          </span>
          <span>Electronics &amp; Mobiles</span>
        </button>
      </FilterGroup>
      {filterGroups.map((g) => (
        <FilterGroup key={g} id={g} title={g} open={false} />
      ))}
    </aside>
  );
}

function FilterGroup({ id, title, open, onToggle, children }: { id: string; title: string; open: boolean; onToggle?: (id: string) => void; children?: React.ReactNode }) {
  return (
    <section className={styles.filterGroup} data-open={open || undefined}>
      <button type="button" className={styles.filterHead} aria-expanded={open} onClick={() => onToggle?.(id)}>
        <span>{title}</span>
        <OriginIcon name={open ? 'chevron-up' : 'chevron-down'} size={16} />
      </button>
      {open && children && <div className={styles.filterBody}>{children}</div>}
    </section>
  );
}

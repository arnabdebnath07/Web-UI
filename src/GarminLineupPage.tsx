import { useEffect, useState } from 'react';
import { GarminLineup } from './components/GarminLineup';
import { FilterChips, ProductGrid, ResultsBar } from './components/Listing';
import { CategoryNav, FiltersSidebar, SiteHeader } from './components/SiteChrome';
import { allProducts, copy, lineup } from './data';
import styles from './GarminLineupPage.module.css';

/** `?series=forerunner` opens with that series picked, `?series=fenix,forerunner` limits the lineup (Figma 10.2 / 10.3) */
function readUrl() {
  const params = new URLSearchParams(window.location.search);
  const only = params.get('only')?.split(',').filter(Boolean);
  const series = only?.length ? lineup.filter((s) => only.includes(s.id)) : lineup;
  const picked = params.get('series');
  return { series, picked: series.some((s) => s.id === picked) ? picked : null };
}

/**
 * noon.com search results for "garmin watch" (Figma XzSbnjrYFbhNg6Rc5lKmGJ · 1320:1652): the Garmin lineup above the
 * listing. Picking a series narrows the listing to it (1332:903); Clear or picking it again shows everything.
 */
export function GarminLineupPage() {
  const [{ series, picked: initial }] = useState(readUrl);
  const [picked, setPicked] = useState<string | null>(initial);
  const current = series.find((s) => s.id === picked) ?? null;
  const products = current ? current.products : allProducts;

  // the pick is in the URL, so a reload or a shared link opens the same view
  useEffect(() => {
    const url = new URL(window.location.href);
    if (picked) url.searchParams.set('series', picked);
    else url.searchParams.delete('series');
    window.history.replaceState(null, '', url);
  }, [picked]);

  return (
    <div className={styles.page}>
      <SiteHeader />
      <CategoryNav />
      <div className={styles.body}>
        <FiltersSidebar />
        <main className={styles.main}>
          <GarminLineup series={series} picked={picked} onPick={setPicked} />
          <ResultsBar
            summary={
              current ? (
                <>
                  {copy.seriesResults(products.length)}
                  <b>{current.name}</b>
                </>
              ) : (
                copy.allResults
              )
            }
            onClear={current ? () => setPicked(null) : undefined}
          />
          <FilterChips />
          <ProductGrid products={products} gridKey={picked ?? 'all'} />
        </main>
      </div>
    </div>
  );
}

# Web UI · Garmin lineup

The noon.com desktop search results page for "garmin watch", with the **Garmin lineup** carousel on top
(Figma `XzSbnjrYFbhNg6Rc5lKmGJ` · node `1320:1652`). It is the web version of the mobile lineup in the noon Flow Kit.

```bash
npm install
npm run dev        # http://localhost:5181
npm run build      # static build in dist/
npm run typecheck
```

## How the lineup behaves

- **Scroll:** drag with the mouse, swipe on a trackpad, or Shift + wheel. About 156px of movement is one series; a
  flick carries on, then the row springs to rest on the nearest series. The ruler's ticks rise and turn pink around
  the needle while it moves (the "tower").
- **Hover:** the watch photo grows from 96 to 112px. Only real mouse movement over a resting row counts, so
  scrolling never looks like selecting.
- **Select:** click a series. Its photo grows, its name turns semibold, it glides under the pink needle and the
  results narrow to it ("4 results for Forerunner" + Clear). Click it again, or Clear, to show everything.
- **Needle:** shown only under the selected series; with nothing selected the ruler is plain grey.
- Arrows page through the series; ←/→, Home and End move between tiles.
- `?series=forerunner` opens with a series selected; `?only=fenix,forerunner` limits the lineup (two or fewer hide the ruler).

## Layout

- `src/` — the page: `GarminLineupPage.tsx`, `components/GarminLineup.tsx` (the carousel), `SiteChrome.tsx`
  (header, categories, filters), `Listing.tsx` (results bar, chips, grid), `tokens.css`, `data.ts`.
- `kit/src/` — the Flow Kit files the page imports, copied unchanged.

# IPRN — Impact Performance Reporting Norms

Astro build of the IPRN homepage from Figma (`IPRN-Web-Design`, page node `1876:6924`, style guide page `133:10`).

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Structure

- `src/styles/global.css` — design tokens from the Figma style guide (colors, Figtree type scale for desktop / tablet ≤1024px / mobile ≤767px, container 1140px)
- `src/components/` — one component per homepage section, plus `ResourceCard`
- `src/data/site.ts` — nav, footer menu, benefits, recent update, further resources (edit content here)
- `src/data/partners.ts` — partner and stewardship council logos
- `src/assets/` — raster images (optimized to WebP at build)
- `public/assets/` — SVG icons and illustrations exported from Figma

## Not decided yet (placeholders)

- Nav dropdown contents (Figma shows chevrons but no submenu items)
- Link targets for resources, recent update and footer pages
- Newsletter form provider and contact email (`info@example.org`)
- Mobile/tablet layout was not in Figma; it follows the style guide's responsive type scale

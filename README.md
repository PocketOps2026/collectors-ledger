# GrailKeeper 🏆

A fun, colorful collector's catalog app for tracking trading cards, Funko Pops, coins & bullion, toys, memorabilia, and card breaks — spending, sales, trades, grades, selling pipeline, duplicate/bulk stock, and current value, all with photos. Mobile-friendly with a slide-in menu, and works offline once loaded.

**No backend, no database, no login.** Everything runs client-side in the visitor's own browser using IndexedDB. Each person who opens the site gets their own private, local collection — nothing is shared or synced between visitors.

## Deploy this yourself (no coding required)

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (e.g. `grailkeeper`) and upload **both** `index.html` and `sw.js` using GitHub's "Add file → Upload files" button in the browser — no git commands needed. (`sw.js` is what makes the app work offline; it has to be its own file.)
3. Go to vercel.com, sign in with your GitHub account, click "Add New Project," and import the `grailkeeper` repo.
4. Click **Deploy**. Vercel auto-detects it as a static site — no build settings needed.
5. You'll get a live URL (e.g. `grailkeeper.vercel.app`) you can share with anyone.

To update an already-deployed copy, re-upload the changed file(s) to the same GitHub repo (same filename, confirm the overwrite) — Vercel redeploys automatically within a minute or two.

## Notes

- Every visitor's data lives only in their own browser (IndexedDB). Clearing browser data/history will remove it, so encourage friends to use the in-app **Export Backup** button regularly to save a JSON file they can keep safe.
- Photos are stored locally too (resized before saving) — nothing is ever uploaded anywhere.
- On phones, tap the ☰ menu in the top bar to switch collections.
- Once loaded on the deployed link, the app keeps working with no connection (handy at a card show with bad signal) — this needs `sw.js` uploaded alongside `index.html`, and only applies to the live web link, not the file opened directly from disk.
- Each collection page has a **Whatnot CSV** button that exports Owned/Listed items in Whatnot's bulk-upload format. Double-check Category/Sub Category/Condition against Whatnot's current template before importing — and add photos manually in Whatnot's draft editor, since local photos can't be included as public image URLs.
- For duplicates (e.g. 5 of the same Funko Pop), set **Quantity In Stock** on the item instead of creating separate entries, and use **Quick Sell 1 Unit** in the edit form to sell down stock one at a time.
- **Card Breaks** is a separate section for break-level cost/profit tracking (box cost, spot revenue, fees, shipping → net P&L). It's intentionally back-office only — per-spot buyer and fulfillment tracking stays in whatever platform (Whatnot, eBay Live, etc.) you actually ran the break on.

# GrailKeeper 🏆

A fun, colorful collector's catalog app for tracking trading cards, Funko Pops, coins & bullion, toys, and memorabilia — spending, sales, trades, grades, selling pipeline, and current value, all with photos. Mobile-friendly with a slide-in menu.

**No backend, no database, no login.** Everything runs client-side in the visitor's own browser using IndexedDB. Each person who opens the site gets their own private, local collection — nothing is shared or synced between visitors.

## Deploy this yourself (no coding required)

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository (e.g. `grailkeeper`) and upload `index.html` using GitHub's "Add file → Upload files" button in the browser — no git commands needed.
3. Go to vercel.com, sign in with your GitHub account, click "Add New Project," and import the `grailkeeper` repo.
4. Click **Deploy**. Vercel auto-detects it as a static site — no build settings needed.
5. You'll get a live URL (e.g. `grailkeeper.vercel.app`) you can share with anyone.

To update an already-deployed copy, just re-upload the new `index.html` to the same GitHub repo (same filename, confirm the overwrite) — Vercel redeploys automatically within a minute or two.

## Notes

- Every visitor's data lives only in their own browser (IndexedDB). Clearing browser data/history will remove it, so encourage friends to use the in-app **Export Backup** button regularly to save a JSON file they can keep safe.
- Photos are stored locally too (resized before saving) — nothing is ever uploaded anywhere.
- On phones, tap the ☰ menu in the top bar to switch collections.

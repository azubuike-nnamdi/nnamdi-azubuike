<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cloud Agent

Boot starts local PostgreSQL 16 and the Next.js dev server at http://localhost:3000. When `.env` is missing, startup writes a local `DATABASE_URL` for database `nnamdiazubuike` plus the dev admin from `.env.example`.

- Admin: http://localhost:3000/admin (`admin@nnamdiazubuike.dev` / `changeme123`)
- `pnpm seed` runs on boot only when the `users` table is not there yet
- `pnpm lint` lints the repo. `pnpm build` is the production build the pre-push hook runs.

# Nnamdi Azubuike - Portfolio

Portfolio site powered by **Next.js** and **Payload CMS**. Projects, articles, and site settings are editable in the Payload admin.

## Stack

- Next.js 16 + React 19
- Payload CMS 3 (Postgres)
- Tailwind CSS + shadcn/ui

## Setup

1. Copy env defaults:

```bash
cp .env.example .env
```

2. Set:

- `DATABASE_URL` — Postgres connection string
- `PAYLOAD_SECRET` — long random string
- Optional: `PAYLOAD_ADMIN_EMAIL` / `PAYLOAD_ADMIN_PASSWORD` for the first admin user (defaults used by seed)

3. Install and run:

```bash
pnpm install
pnpm dev
```

4. Seed content from the previous hardcoded data (one-time):

```bash
pnpm seed
```

5. Open:

- Site: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## Useful scripts

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Next.js + Payload admin |
| `pnpm seed` | Upsert projects, articles, site settings |
| `pnpm generate:types` | Regenerate `payload-types.ts` |
| `pnpm generate:importmap` | Regenerate admin import map |

## Content model

- **Projects** — portfolio case studies
- **Articles** — `external` link cards or `full` in-site Lexical posts (`/articles/[slug]`)
- **Site Settings** (global) — nav, social links, footer columns
- **Media** — uploads for article images

## Connect

- LinkedIn: [linkedin.com/in/nnamdiazubuike](https://linkedin.com/in/nnamdiazubuike)
- GitHub: [github.com/nnamdiazubuike](https://github.com/nnamdiazubuike)
- Email: [acu.nnamdi@gmail.com](mailto:acu.nnamdi@gmail.com)

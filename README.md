# Rainfer — Primate Conservation Sanctuary

A static, bilingual reconstruction of the public Rainfer website based on the supplied local mirror. Spanish is the default language; English is available for verified interface and route content.

## Stack

- Astro static output with TypeScript.
- Data-driven route registry and reusable content templates.
- CSS design system with accessible responsive behavior.
- No server, database, payment processor or unsolicited form submission.

## Development

```bash
pnpm install
pnpm dev
```

Open the local preview at `http://localhost:3000/`.

## Checks

```bash
pnpm check
pnpm audit:links
pnpm audit:i18n
pnpm build
```

## Deployment

Publish `dist/` to a static host. Configure a clean-route fallback if the host requires one. Set `PUBLIC_SITE_URL` to the real production origin before enabling absolute canonical URLs and sitemap entries. Review `docs/ASSET_LICENSES.md` before redistributing any supplied image or PDF.

## Scope and limitations

The source mirror contains public WordPress pages and assets, not the original server, database, private administration, or payment backends. Legacy Avada/jQuery runtime files are deliberately not part of this rebuild. Contact and application forms validate locally and explain the required official integration; they do not send messages. See `docs/PROJECT_AUDIT.md`, `docs/PAGE_INVENTORY.md`, `docs/CONTENT_MIGRATION.md`, and `docs/DEPLOYMENT.md`.

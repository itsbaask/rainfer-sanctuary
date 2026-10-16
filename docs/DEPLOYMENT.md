# DEPLOYMENT

1. Install the pinned pnpm toolchain.
2. Run `pnpm install` and `pnpm build`.
3. Publish the generated `dist/` directory on a static host.
4. Configure the real production origin before enabling absolute canonical URLs and sitemap entries.
5. Configure SPA/static fallback for clean routes if the host requires it.
6. Review image and PDF permissions in `docs/ASSET_LICENSES.md` before public launch.
7. Do not include `node_modules`, `.env`, or the source mirror in a public deployment bundle.

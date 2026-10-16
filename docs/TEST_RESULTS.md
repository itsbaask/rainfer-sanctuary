# TEST RESULTS

| Check | Result | Evidence |
|---|---|---|
| Dependency installation | Passed | `pnpm install` completed with pnpm 10.12.1; lifecycle scripts rebuilt explicitly for esbuild and sharp. |
| Astro/TypeScript diagnostics | Passed | `pnpm check`: 0 errors, 0 warnings, 0 hints across 16 files. |
| Production build | Passed | `pnpm build`: 135 static HTML pages generated in `dist/`. |
| Route manifest | Passed | `pnpm audit:links`: 134 valid entries in `public/manus-routes.json`. |
| Localization coverage | Passed with documented gaps | `pnpm audit:i18n`: 114 Spanish records and 41 verified English titles; Spanish-only mirror pages are explicitly not presented as translated. |
| Raw HTML metadata/body | Passed locally | `/`, `/es/`, `/es/que-hacemos/`, `/es/archivo/p-1091/` returned 200 with route titles and body content. |
| 404 handling | Passed locally | Unknown route returned HTTP 404 and the 404 document. |
| Preview origin | Passed | `https://8328-itynljye9dl0vxk0lath2-a5a71341.us4.manus.computer/es/` returned HTTP 200. The task's direct port-3000 public URL returned 403 at the gateway and is not used. |
| Visual review | Passed with follow-up | Desktop screenshots captured for homepage, content page and contact page. Hero image was corrected to a primate image from the supplied source assets. |
| Form behavior | Not submitted | Contact form is local validation only; no external message was sent. |

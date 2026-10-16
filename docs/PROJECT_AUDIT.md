# PROJECT AUDIT
## Source snapshot
- Static WordPress/Avada mirror from `rainfer.org`.
- 120 HTML files; 114 candidate public HTML files after excluding feeds, author and comments endpoints.
- 627 downloaded files; approximately 309 MB.
- Legacy JavaScript/CSS were inventoried but are not copied into the new app runtime.

## Security scan
A conservative filename/content scan produced `reports/suspicious_matches.txt`; matches require manual review and are not copied into the rebuild. The scan is not a claim of compromise.

## Migration policy
Canonical public pages are rebuilt from verified titles, headings, links and supplied public content. WordPress query duplicates are mapped to canonical routes. Missing or untranslated content remains explicitly marked.

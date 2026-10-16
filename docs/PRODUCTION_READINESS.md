# Production readiness and launch checklist

This repository is an independent informational reconstruction of Rainfer, not an official Rainfer publication. Keep that distinction clear in public-facing copy.

## What the project now includes
- Static Astro pages with Spanish and English routes.
- Responsive editorial homepage and an accessible, interactive conservation-principles guide.
- Dedicated bilingual pages for impact and editorial standards.
- Page metadata, Open Graph/Twitter cards, canonical URLs and JSON-LD WebPage metadata.
- A lightweight web app manifest, accessible navigation, keyboard focus styles and reduced-motion support.
- CI checks for Astro/TypeScript, route-manifest shape, localization-source presence, and missing root-relative targets in the generated site.

## Required before an official or production launch
- **Written authorization:** obtain approval from Rainfer before presenting this reconstruction as an official website or using official brand assets.
- **Image rights:** verify the license, attribution and redistribution rights for every image and document. Publicly accessible does not mean freely reusable.
- **Factual review:** ask the organization to verify animal information, programs, visits, training, volunteer availability, impact statements and every operational detail.
- **Forms:** the contact form is intentionally a local-only demo and sends nothing. Connect a privacy-reviewed, organization-approved service before accepting enquiries.
- **Payments:** no payment details are collected here. Any donation or sponsorship flow must link to a verified official destination and never collect card details in this static site.
- **Privacy and cookies:** add a reviewed privacy notice and any legally required consent controls if analytics, embeds, forms or third-party services are introduced.
- **Accessibility:** perform keyboard-only, screen-reader, contrast and mobile-device testing; automated checks are not a substitute for human review.
- **Performance:** run Lighthouse/WebPageTest against the deployed build and optimize any large images after confirming their rights.
- **Search and domain:** verify canonical URLs, sitemap output, redirects, metadata and search-console ownership after the final domain is configured.

## Deployment
GitHub Actions runs type/build checks and the static link audit before deploying to GitHub Pages. Review the latest workflow run and inspect the live site after deployment; a successful build alone does not prove every hosted URL or image is correct.

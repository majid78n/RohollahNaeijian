# Rohollah Naeijian — academic website

Personal academic website built with [Astro](https://astro.build), deployed to GitHub Pages.
Static HTML, no tracking, ~zero client-side JavaScript.

## Updating content

All lists on the site are Markdown files with a small header ("frontmatter"):

| What                | Where                         |
| ------------------- | ----------------------------- |
| Name, role, links, interests, photo, CV | `src/site.config.ts` |
| Publications        | `src/content/publications/`   |
| Projects            | `src/content/projects/`       |
| News                | `src/content/news/`           |
| Education           | `src/content/education/`      |
| Experience & awards | `src/content/experience/`     |
| Images, CV PDF      | `public/` (e.g. `public/images/projects/x.jpg` → `/images/projects/x.jpg`) |

Three ways to edit — each one ends in a commit to `main`, and GitHub Actions rebuilds and
redeploys the site in about a minute:

1. **Admin panel** — sign in at [pagescms.org](https://pagescms.org) with GitHub and open this
   repository. Forms are defined in [`.pages.yml`](.pages.yml).
2. **GitHub web editor** — open a file on github.com, click the pencil, commit.
3. **Locally** — see below.

Fields are validated at build time against the schema in
[`src/content.config.ts`](src/content.config.ts); a typo (e.g. a missing `title`) fails the
build with a clear message instead of publishing a broken page.

### Example: add a project

`src/content/projects/my-project.md`

```md
---
title: My new project
summary: One sentence shown on the card.
affiliation: ETH Zürich
date: 2026-11-01
image: /images/projects/my-project.jpg
tags: [PyTorch, GNSS]
featured: true
links:
  code: https://github.com/majid78n/my-project
---

Longer description shown on the project page (Markdown).
```

## Local development

Requires Node.js 22 (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + production build into dist/
npm run preview   # serve dist/
```

## Project structure

```
src/
  site.config.ts        global profile settings
  content.config.ts     typed schemas for all content collections
  content/              Markdown content
  components/           Hero, Nav, Publications, ProjectCard, …
  layouts/              Base (SEO, JSON-LD) and Page (sub-pages)
  pages/                index, projects/, projects/[id], 404
  lib/                  content queries, URL helpers
public/                 static files copied as-is
.github/workflows/      CI: type-check & build on every PR, deploy on main
```

## Deployment

`.github/workflows/deploy.yml` builds on every push and pull request and deploys `main` to
GitHub Pages. The site URL and base path come from GitHub automatically, so the same code works
for `https://<user>.github.io`, a project page, or a custom domain (add `public/CNAME`).

## Notes

- Fonts (JetBrains Mono, IBM Plex Sans) are self-hosted via Fontsource — no requests to
  Google.
- `npm audit` reports advisories in `sharp`/`esbuild`; both are build-time tools only and are
  not shipped to visitors. Upgrading to Astro 7 (needs Node ≥ 22.23) clears them.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Kyung Chul Lee, built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Content is authored in Markdown/Liquid and rendered by Jekyll into a static site. Live site is served at **kyungchullee.com** (custom domain via GitHub Pages; `url` in `_config.yml` is the `kyungchullee.github.io` fallback).

## Commands

Local development runs through Docker (the Ruby/Jekyll toolchain is not expected to be installed on the host):

```bash
docker compose up                         # serve at http://localhost:8080, live-reloads on file changes
docker compose -f docker-compose-slim.yml up   # slimmer image, same functionality
```

Native build (requires a matching Ruby + `bundle install`):

```bash
bundle exec jekyll build                  # equivalent to bin/cibuild
bundle exec jekyll serve                  # local server
```

Formatting (Liquid/HTML/JS/CSS via Prettier; enforced in CI by `.github/workflows/prettier.yml`):

```bash
npx prettier --write .                    # printWidth 150, uses @shopify/prettier-plugin-liquid
```

`.pre-commit-config.yaml` also runs trailing-whitespace / EOF / YAML / large-file checks.

## Deployment

Deployment is **automatic**: pushing to `master` (or `main`) triggers `.github/workflows/deploy.yml`, which builds the site and publishes the result to the `gh-pages` branch. The path filters in that workflow mean edits to the docs (`README.md`, `INSTALL.md`, `CUSTOMIZE.md`, `FAQ.md`) do **not** trigger a rebuild.

`bin/deploy` is the manual fallback (builds locally, purges unused CSS via `purgecss.config.js`, force-pushes to `gh-pages`). Prefer the automatic workflow — only use `bin/deploy` when CI is unavailable.

Note: this repo's default branch is `master`, but the theme's own tooling (`bin/deploy`) defaults `SRC_BRANCH` to `main` — pass `-s master` if running it manually.

## Architecture

Standard Jekyll layout. Content is data-driven — most changes are edits to Markdown/YAML files, not code.

- **`_config.yml`** — the central control file. Site metadata, enabled features (search, navbar, theme), `jekyll-scholar` bibliography settings, and external-data fetching all live here. When a feature isn't showing up, check here first.
- **`_pages/`** — top-level pages (`about.md` is the homepage; `Duke.md`, `Michigan.md`, `SNU.md`, `Yonsei.md`, etc. are institution pages). Each has YAML front matter selecting a layout and permalink.
- **`_layouts/`** + **`_includes/`** — Liquid templates. Layouts define page skeletons; includes are reusable fragments (`selected_papers.liquid`, `news.liquid`, `projects.liquid`, `header.liquid`, …). Front-matter `layout:` chooses which layout wraps a page's content.
- **`_news/`**, **`_projects/`**, **`_books/`** — Jekyll collections (configured under `collections:` in `_config.yml`). Add a Markdown file to the folder to add an item; `output:` controls whether each gets its own page.
- **`_bibliography/papers.bib`** — publications source. Rendered by `jekyll-scholar` using `_config.yml`'s `scholar:` block (APA style). `filtered_bibtex_keywords` (e.g. `abbr`, `abstract`, `bibtex_show`) are internal fields stripped from output. Citation counts are fetched by the `google-scholar-citations.rb` / `inspirehep-citations.rb` plugins.
- **`_data/`** — structured YAML: `cv.yml`, `coauthors.yml`, `repositories.yml`, `socials.yml`, `venues.yml`.
- **`_sass/`** + **`assets/`** — styles and static assets. `cache-bust.rb` appends content hashes to asset URLs.
- **`_plugins/`** — custom Ruby build-time plugins (citation fetching, `details.rb` for collapsible blocks, `download-3rd-party.rb`, `external-posts.rb` for pulling in external blog RSS, `hide-custom-bibtex.rb`, `remove-accents.rb`).

### Key conventions

- Adding content usually means creating/editing a Markdown file with front matter, or editing YAML in `_data/` — not touching templates.
- Bibliography edits go in `papers.bib`; use the `bibtex_show`, `selected`, `preview` keyword fields (stripped on render) to control how entries display.
- External data (resume JSON, external blog posts) is fetched at build time via `jekyll-get-json` and `external_sources` in `_config.yml` — these require network access during the build.
- Reference docs (`INSTALL.md`, `CUSTOMIZE.md`, `FAQ.md`) come from upstream al-folio and document theme features in depth.

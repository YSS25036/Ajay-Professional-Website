# Ajay K Madan - Professional Website

Static site for [ajaykmadan.in](https://ajaykmadan.in), built with Astro, Decap CMS, and deployed on Netlify.

## Setup

1. **Install dependencies** (including sitemap):

   ```bash
   npm install
   npm install @astrojs/sitemap
   ```

2. **Environment variables** (optional):

   - Copy `.env.example` to `.env`
   - Add `PUBLIC_GA_MEASUREMENT_ID` for Google Analytics
   - Add `PUBLIC_FORMSPREE_ENDPOINT` for the contact form (get from [formspree.io](https://formspree.io))

## Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Content Management

- **Decap CMS**: Visit `/admin` on the deployed site to edit content visually
- **Cursor/Code**: Edit Markdown files in `src/content/blog/` and `src/content/projects/` directly

## Build & Deploy

```bash
npm run build
```

Deploy the `dist` folder to Netlify. See the migration plan for full deployment steps.

## Project Structure

- `src/content/blog/` - Blog posts (Markdown)
- `src/content/projects/` - Project pages
- `src/data/testimonials.json` - Testimonials
- `public/admin/` - Decap CMS config
- `export/` - Place WordPress export XML here before migration

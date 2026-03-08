# SEO Setup Guide

Step-by-step instructions for Google Search Console, sitemap submission, and site verification.

---

## 1. Google Search Console

### Add your property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **Add property**
4. Choose **URL prefix** and enter: `https://ajaykmadan.in`
5. Click **Continue**

### Verify ownership (HTML tag method)

1. Select **HTML tag** as the verification method
2. Copy the `content` value from the meta tag (the long string inside `content="..."`)
3. Add it to your environment:
   - **Local:** Add to `.env`: `PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here`
   - **Netlify:** Site settings → Environment variables → Add `PUBLIC_GOOGLE_SITE_VERIFICATION` with your code
4. Redeploy the site (or run `npm run build` locally)
5. In Search Console, click **Verify**

### Submit your sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Under "Add a new sitemap", enter: `sitemap-index.xml`
3. Click **Submit**

Your sitemap URL: **https://ajaykmadan.in/sitemap-index.xml**

---

## 2. Verify setup

- **robots.txt:** https://ajaykmadan.in/robots.txt (should allow crawlers and reference the sitemap)
- **Sitemap:** https://ajaykmadan.in/sitemap-index.xml (should list your pages)

---

## 3. Optional: Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site: `https://ajaykmadan.in`
3. Verify via the same HTML meta tag (use the same `PUBLIC_GOOGLE_SITE_VERIFICATION` value if Bing accepts it, or add a separate `PUBLIC_BING_SITE_VERIFICATION` if needed)
4. Submit sitemap: `https://ajaykmadan.in/sitemap-index.xml`

---

## 4. After verification

- **Indexing:** Google will start crawling your pages. New sites may take a few days to appear in search.
- **Coverage:** Use the Coverage report in Search Console to see indexed pages and any issues.
- **Performance:** After indexing, the Performance report shows clicks, impressions, and average position.

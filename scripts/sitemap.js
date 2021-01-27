const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

async function generateSitemap() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${process.env.DOMAIN}</loc>
        <lastmod>${dayjs().format('YYYY-MM-DD')}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>
  `;
  const prettierConfig = await prettier.resolveConfig(path.resolve(process.cwd(), '.prettierrc.js'));
  const formattedSitemap = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });
  fs.writeFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), formattedSitemap);
}

module.exports = { generateSitemap };

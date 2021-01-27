const fs = require('fs');
const path = require('path');

function generateRobots(isProduction = false) {
  const robots = isProduction
    ? `User-agent: *
Allow: /
Sitemap: ${process.env.DOMAIN}/sitemap.xml`
    : `User-agent: *
Disallow: /`;
  fs.writeFileSync(path.resolve(process.cwd(), 'public/robots.txt'), robots);
}

module.exports = { generateRobots };

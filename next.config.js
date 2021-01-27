const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const dotenv = require('dotenv');
const path = require('path');
const { generateSitemap } = require('./scripts/sitemap');
const { generateRobots } = require('./scripts/robots');

module.exports = (phase) => {
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.BUILD_ENV === 'stg';
  const isProduction = phase === PHASE_PRODUCTION_BUILD && process.env.BUILD_ENV === 'prod';
  console.log(`info  - Setup ${isProduction ? 'production' : isStaging ? 'staging' : 'development'} .env`);

  const envPath = path.resolve(
    process.cwd(),
    isProduction ? '.env.production' : isStaging ? '.env.staging' : '.env.development'
  );
  const env = dotenv.config({ path: envPath });
  if (env.error) {
    console.error(`error  - Failed to parse .env from ${envPath}`);
    process.exit(1);
  }

  return {
    env: env.parsed,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        if (isProduction) {
          console.log(`info  - Generating sitemap...`);
          generateSitemap();
        }
        console.log(`info  - Generating robots...`);
        generateRobots();
      }
      return config;
    },
  };
};

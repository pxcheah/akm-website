const dotenv = require('dotenv');
const path = require('path');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const { generateSitemap } = require('./scripts/sitemap');
const { generateRobots } = require('./scripts/robots');

module.exports = (phase) => {
  const isProdBuild = phase === PHASE_PRODUCTION_BUILD;
  const isStaging = isProdBuild && process.env.BUILD_ENV === 'stg';
  const isProduction = isProdBuild && process.env.BUILD_ENV === 'prod';

  const buildEnvDisplay = isProduction ? 'production' : isStaging ? 'staging' : 'development';
  console.log(`info  - Setup ${buildEnvDisplay} environment variables`);

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
      if (isProdBuild && !isServer) {
        if (isProduction) {
          console.log(`info  - Generating sitemap`);
          generateSitemap();
        }
        console.log(`info  - Generating robots`);
        generateRobots(isProduction);
      }
      return config;
    },
    trailingSlash: isProdBuild,
  };
};

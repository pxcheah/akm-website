const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const dotenv = require('dotenv');
const path = require('path');

module.exports = (phase) => {
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';
  const isProduction = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
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

  return { env: env.parsed };
};

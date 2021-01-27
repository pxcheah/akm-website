import NextHead from 'next/head';
import GoogleFonts from 'next-google-fonts';

import structuredData from '@/constants/structuredData';

const Head = () => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={process.env.ROBOTS} />

      {/* Global site tag (gtag.js) - Google Analytics */}
      {process.env.PRODUCTION === '1' && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`} />
          <script
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_ID}');
              `,
            }}
          />
        </>
      )}

      {/* SEO tags */}
      <title>Alsey Kimia | Industrial Chemicals Supplier</title>
      <meta
        name="description"
        content="Alsey Kimia is a chemical raw material supplier based in Malaysia. We offer the finest products from well-established principals worldwide."
      />
      <meta property="og:url" content="https://www.alseykimia.com.my" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Alsey Kimia | Industrial Chemical Supplier" />
      <meta
        property="og:description"
        content="Alsey Kimia is a chemical raw material supplier based in Malaysia. We offer the finest products from well-established principals worldwide."
      />
      <meta property="og:image" content="/icon-192x192.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Alsey Kimia | Industrial Chemicals Supplier" />
      <meta
        name="twitter:description"
        content="Alsey Kimia is a chemical raw material supplier based in Malaysia. We offer the finest products from well-established principals worldwide."
      />
      <meta name="twitter:image" content="/icon-192x192.png" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* Favicons */}
      <meta name="theme-color" content="#009ddc" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
    </NextHead>
  </>
);

export default Head;

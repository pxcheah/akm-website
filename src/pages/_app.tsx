import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Header from '@/components/header';
import Footer from '@/components/footer';
import structuredData from '@/constants/structuredData';
import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLanding = router.pathname === '/';
  return (
    <ChakraProvider theme={theme}>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
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
        <meta name="robots" content={process.env.ROBOTS} />
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

        <meta name="theme-color" content="#009ddc" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <Flex direction="column" minH="100vh">
        {!isLanding && <Header />}
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;

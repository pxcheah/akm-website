import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Header from '@/components/header';
import Footer from '@/components/footer';
import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLanding = router.pathname === '/';
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <title>Alsey Kimia | Industrial Chemicals Supplier</title>
        <meta
          name="description"
          content="Alsey Kimia is a chemical raw material supplier based in Malaysia. We offer the finest products from well-established principals worldwide."
        />
        <meta name="theme-color" content="#009ddc" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
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

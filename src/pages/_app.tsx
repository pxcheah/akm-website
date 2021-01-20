import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Footer from '@/components/footer';
import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Alsey Kimia | Industrial Chemicals Supplier</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Flex direction="column" minH="100vh">
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;

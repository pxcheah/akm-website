import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Head from '@/components/head';
import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLanding = router.pathname === '/';
  return (
    <ChakraProvider theme={theme}>
      <Head />
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

import { Center, Container, Text } from '@chakra-ui/react';

const Intro = () => (
  <Center as="section">
    <Container maxW={{ base: '60ch', lg: '80ch' }} px={{ base: 8, md: 12 }} py={{ base: 24, lg: 32 }}>
      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        align={{ base: 'left', md: 'center' }}
        color="gray.300"
      >
        We&apos;re a chemical raw material supplier based in Malaysia, offering the finest products from
        well-established principals worldwide.
      </Text>
    </Container>
  </Center>
);

export default Intro;

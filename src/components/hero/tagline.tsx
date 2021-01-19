import { Container, Text } from '@chakra-ui/react';

const Tagline = () => (
  <Container maxW="80ch" px={8} color="white">
    <Text
      fontSize={{ base: '2xl', md: '3xl' }}
      fontWeight="bold"
      lineHeight={1.2}
      align={{ base: 'left', md: 'center' }}
      opacity="0.85"
    >
      Need industrial chemicals?
    </Text>
    <Text fontSize={{ base: '36px', md: '5xl' }} fontWeight="bold">
      We&apos;ve got you covered!
    </Text>
  </Container>
);

export default Tagline;

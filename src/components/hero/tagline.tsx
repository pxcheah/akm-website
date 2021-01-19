import { Container, Text } from '@chakra-ui/react';

const Tagline = () => (
  <Container maxW="80ch" px={8} centerContent>
    <Text fontSize={{ base: 'lg', md: '4xl' }} fontWeight="bold" align="center" color="white" opacity="0.85">
      Need industrial chemicals?
    </Text>
    <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" align="center" color="white" opacity="0.85">
      We&apos;ve got you covered!
    </Text>
  </Container>
);

export default Tagline;

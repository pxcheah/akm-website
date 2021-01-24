import { Container, Text } from '@chakra-ui/react';

const Tagline = () => (
  <Container maxW="80ch" px={8} color="white" fontWeight="bold" lineHeight={1.2}>
    <Text fontSize={{ base: 'xl', md: '3xl' }} align={{ md: 'center' }} opacity="0.85">
      Need industrial chemicals?
    </Text>
    <Text fontSize={{ base: '36px', md: '5xl' }} align={{ md: 'center' }}>
      We&apos;ve got you covered!
    </Text>
  </Container>
);

export default Tagline;

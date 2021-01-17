import { Center, Container, Text } from '@chakra-ui/react';

const Intro = () => (
  <Center>
    <Container maxW={{ base: '60ch', lg: '80ch' }} py={{ base: 24, lg: 32 }}>
      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        align={{ base: 'left', md: 'center' }}
        color="gray.300"
      >
        We're a chemical raw material supplier based in Malaysia. We offer quality products from well-established
        principals worldwide.
      </Text>
    </Container>
  </Center>
);

export default Intro;
import { Center, Container, Text } from '@chakra-ui/react';

const Intro = () => (
  <Center>
    <Container maxW="80ch" py={32}>
      <Text fontSize="3xl" fontWeight="bold" align="center" color="gray.300">
        We're a chemical raw material supplier based in Malaysia. We offer quality products from well-established
        principals worldwide.
      </Text>
    </Container>
  </Center>
);

export default Intro;

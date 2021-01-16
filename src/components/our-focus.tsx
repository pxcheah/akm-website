import { Box, Container, Heading } from '@chakra-ui/react';

const OurFocus = () => (
  <Box bgGradient="linear(68deg, teal.200 0%, blue.400 40%, blue.500 100%)">
    <Container maxW="container.xl" py={36}>
      <Heading as="h2" size="xl" color="white">
        Our Focus
      </Heading>
    </Container>
  </Box>
);

export default OurFocus;

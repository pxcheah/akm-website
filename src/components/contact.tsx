import { Box, Container, Heading, HStack, Text } from '@chakra-ui/react';

const Contact = () => (
  <Container maxW="container.xl" py={36}>
    <HStack spacing={16}>
      <Box w="40%">
        <Heading as="h2" size="xl">
          Drop us a message
        </Heading>
        <Text mt={6} fontSize="lg">
          We are thrilled to hear what you want to tell us and offer the solutions you need for your business!
        </Text>
      </Box>
      <Box>form</Box>
    </HStack>
  </Container>
);

export default Contact;

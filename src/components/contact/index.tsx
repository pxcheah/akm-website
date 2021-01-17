import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

import ContactForm from './form';

const Contact = () => (
  <Container maxW="container.xl" py={{ base: 20, lg: 24 }} px={12}>
    <Stack direction={{ base: 'column', md: 'row' }} spacing={16} align="center">
      <Box w={{ lg: '40%' }}>
        <Heading as="h2" size="xl">
          Drop us a message
        </Heading>
        <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
          We are thrilled to hear what you want to tell us and offer the products you need for your business!
        </Text>
      </Box>
      <ContactForm />
    </Stack>
  </Container>
);

export default Contact;

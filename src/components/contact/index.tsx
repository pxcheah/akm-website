import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

import ContactForm from './form';

const Contact = () => (
  <Box as="section">
    <Container maxW="container.xl" py={{ base: 20, md: 24 }} px={{ base: 6, md: 12 }}>
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 8, lg: 16 }} align={{ lg: 'center' }}>
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
  </Box>
);

export default Contact;

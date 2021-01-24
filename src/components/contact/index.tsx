import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

import ContactForm from './form';
import ContactInfo from './info';

const Contact = () => (
  <Container as="section" py={{ base: 20, md: 24 }}>
    <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: 8, lg: 16 }}>
      <Box
        w={{ lg: '40%' }}
        pt={{ lg: 8 }}
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: 'easeOut' }}
      >
        <Heading as="h2" size="xl">
          Drop us a message
        </Heading>
        <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
          We are thrilled to hear what you want to tell us and offer the products you need for your business!
        </Text>
        <ContactInfo d={{ base: 'none', lg: 'block' }} />
      </Box>
      <ContactForm />
      <ContactInfo d={{ base: 'block', lg: 'none' }} />
    </Stack>
  </Container>
);

export default Contact;

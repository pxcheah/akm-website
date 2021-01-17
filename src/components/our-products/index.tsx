import {
  Box, Container, Heading, Text,
} from '@chakra-ui/react';

const OurProducts = () => (
  <Box as="section" mb={{ base: 20, lg: 24 }} overflow="hidden">
    <Container maxW="container.xl" px={12}>
      <Heading as="h2" size="xl">
        Our products
      </Heading>
      <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
        Discover our vast range of products
      </Text>
      <Box my={{ base: 8, lg: 16 }}>carousel</Box>
    </Container>
  </Box>
);

export default OurProducts;

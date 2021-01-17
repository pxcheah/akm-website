import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer">
    <Box bgGradient="linear(to-r, blue.600, purple.600)" h={1} />
    <Container maxW="container.xl" py={8} px={{ base: 6, md: 12 }}>
      <Text fontSize="xs">&copy; {new Date().getFullYear()} Alsey Kimia (M) Sdn Bhd. All rights reserved.</Text>
    </Container>
  </Box>
);

export default Footer;

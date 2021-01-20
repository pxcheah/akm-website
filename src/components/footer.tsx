import { Box, Container, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" mt="auto">
    <Box bgGradient="linear(to-r, blue.600, purple.600)" h={1} />
    <Container py={8}>
      <Text fontSize="xs">
        &copy;&nbsp;
        {new Date().getFullYear()} Alsey Kimia (M) Sdn Bhd. All rights reserved.
      </Text>
    </Container>
  </Box>
);

export default Footer;

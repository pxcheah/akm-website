import { Box, Container, Text } from '@chakra-ui/react';

const AboutUs = () => (
  <Container maxW="container.xl" pt={36} pb={36 + 16}>
    <Box bgImage="url('/blob.svg')" bgRepeat="no-repeat">
      <Text pos="relative" top={16} left={16} mt={8} w="45ch">
        Incorporated in August 1985, Alsey Kimia (M) Sdn Bhd first started its principal activity in supplying plastic
        resins, fibre glass and polyurethane raw materials. Talk about the first office in Subang Jaya SS15, then how we
        moved to Puchong to increase the warehousing capacity. Talk more about the customers are our commitment,
        delivering the best products along with excellent service.
      </Text>
    </Box>
  </Container>
);

export default AboutUs;

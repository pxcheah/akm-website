import { Box, Container, Grid, Heading, Image } from '@chakra-ui/react';

const Principals = () => (
  <Box bgGradient="linear(107deg, purple.400, purple.600)">
    <Container maxW="container.xl" py={36}>
      <Heading as="h2" size="xl" color="white">
        Principals
      </Heading>
      <Grid mt={32} mb={16} px={8} templateColumns="repeat(4, 1fr)" gap={12} placeItems="center">
        <Image maxH={24} src="/polynt.png" alt="Polynt" />
        <Image maxH={24} src="/united-initiators.svg" alt="United Initiators" />
        <Image maxH={24} src="/tr-industries.svg" alt="TR Industries" />
        <Image maxH={24} src="/huntsman.svg" alt="Huntsman" />
      </Grid>
    </Container>
  </Box>
);

export default Principals;

import { Center, Container, Heading } from '@chakra-ui/react';

import GradientBg from './gradient-bg';

const Hero = () => (
  <GradientBg>
    <Center h="100vh">
      <Container centerContent>
        <Heading as="h1" size="3xl" color="white" opacity="0.9">
          Tagline here
        </Heading>
      </Container>
    </Center>
  </GradientBg>
);

export default Hero;

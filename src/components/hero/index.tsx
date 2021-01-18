import { Center, Container, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

import GradientBg from './gradient-bg';

const Hero = () => (
  <GradientBg>
    <Flex as="a" pos="absolute" top={8} left={{ base: 8, md: 12 }} align="center" color="white" href="/">
      <Image src="/images/akm-white.svg" alt="Alsey Kimia" w={16} />
      <Heading as="h1" size="md" ml={2}>
        Alsey Kimia
      </Heading>
    </Flex>
    <Center h="100vh">
      <Container centerContent>
        <Text fontSize="6xl" fontWeight="bold" align="center" color="white" opacity="0.9">
          Tagline here
        </Text>
      </Container>
    </Center>
  </GradientBg>
);

export default Hero;

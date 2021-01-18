import { Center, Container, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

import GradientBg from './gradient-bg';

const Hero = () => (
  <GradientBg>
    {/* TODO: use next/link */}
    <Link pos="absolute" top={8} left={{ base: 8, md: 12 }} href="/test">
      <Flex align="center" color="white">
        <Image src="/images/akm-white.svg" alt="Alsey Kimia" w={{ base: 12, md: 16 }} />
        <Heading as="h1" size="md" ml={2}>
          Alsey Kimia
        </Heading>
      </Flex>
    </Link>
    <Center h="100vh">
      <Container maxW="80ch" px={8} centerContent>
        <Text fontSize={{ base: 'lg', md: '4xl' }} fontWeight="bold" align="center" color="white" opacity="0.85">
          Need industrial chemicals?
        </Text>
        <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" align="center" color="white" opacity="0.85">
          We've got you covered!
        </Text>
      </Container>
    </Center>
  </GradientBg>
);

export default Hero;

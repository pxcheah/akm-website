import { Box, Center } from '@chakra-ui/react';

import Brand from './brand';
import GradientBg from './gradient-bg';
import Tagline from './tagline';

const Hero = () => (
    <GradientBg>
      <Box pos="absolute" top={8} left={{ base: 8, md: 12 }}>
        <Brand />
      </Box>
      <Center h="100vh">
        <Tagline />
      </Center>
    </GradientBg>
  );

export default Hero;

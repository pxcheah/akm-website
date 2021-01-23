import { Box, Center, useBreakpointValue } from '@chakra-ui/react';

import Brand, { BrandSize } from './brand';
import GradientBg from './gradient-bg';
import Tagline from './tagline';

const Hero = () => {
  const brandSize = useBreakpointValue<BrandSize>({ base: 'md', md: 'lg' });
  return (
    <GradientBg>
      <Box pos="absolute" top={8} left={{ base: 8, md: 12 }}>
        <Brand size={brandSize} white />
      </Box>
      <Center h="100vh">
        <Tagline />
      </Center>
    </GradientBg>
  );
};

export default Hero;

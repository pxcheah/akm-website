import type { FunctionComponent } from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

import { CompanyValue } from '@/types/home';

type SlideProps = CompanyValue;

const ValueSlide: FunctionComponent<SlideProps> = ({ image, title, description, shadowOffset = 0 }) => (
  <Box color="white" pr={{ base: 12, md: 24 }}>
    {/* TODO: look into padding-right */}
    <Image
      w={32}
      h={32}
      src={image}
      alt={title}
      userSelect="none"
      _after={{
        content: "''",
        width: 20,
      }}
    />
    <Box w={32} p={4}>
      <Box pos="relative" left={shadowOffset} h={3} borderRadius="100%" bg="purple.600" opacity="0.4" />
    </Box>
    <Heading mt={8} size="md">
      {title}
    </Heading>
    <Text mt={4}>{description}</Text>
  </Box>
);

export default ValueSlide;

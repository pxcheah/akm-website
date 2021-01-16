import type { FunctionComponent } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

interface SectionProps {
  bg: string;
  heading: string;
}

const Section: FunctionComponent<SectionProps> = ({ bg, heading, children }) => (
  <Box bg={bg} overflow="hidden">
    <Container maxW="container.xl" py={{ base: 24, lg: 36 }} px={6}>
      <Heading as="h2" size="xl" color="white">
        {heading}
      </Heading>
      <Box mt={{ base: 20, lg: 32 }} mb={{ base: 8, lg: 16 }}>
        {children}
      </Box>
    </Container>
  </Box>
);

export default Section;

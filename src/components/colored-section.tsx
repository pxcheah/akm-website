import type { FunctionComponent } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

interface SectionProps {
  bg: string;
  heading: string;
}

const ColoredSection: FunctionComponent<SectionProps> = ({ bg, heading, children }) => (
  <Box as="section" bg={bg} overflow="hidden">
    <Container maxW="container.xl" py={{ base: 20, md: 24 }} px={{ base: 8, md: 12 }}>
      <Heading as="h2" size="xl" color="white">
        {heading}
      </Heading>
      <Box mt={{ base: 16, lg: 24 }} mb={8}>
        {children}
      </Box>
    </Container>
  </Box>
);

export default ColoredSection;

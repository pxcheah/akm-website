import type { FunctionComponent } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

interface SectionProps {
  bg: string;
  heading: string;
}

const ColoredSection: FunctionComponent<SectionProps> = ({ bg, heading, children }) => (
  <Box bg={bg} overflow="hidden">
    <Container maxW="container.xl" py={{ base: 20, lg: 24 }} px={12}>
      <Heading as="h2" size="xl" color="white">
        {heading}
      </Heading>
      <Box my={{ base: 8, lg: 16 }}>{children}</Box>
    </Container>
  </Box>
);

export default ColoredSection;

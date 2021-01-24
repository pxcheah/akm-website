import { Box, Container, forwardRef, Heading } from '@chakra-ui/react';

interface SectionProps {
  bg: string;
  heading: string;
}

const ColoredSection = forwardRef<SectionProps, 'section'>((props, ref) => {
  const { bg, heading, children, ...sectionProps } = props;
  return (
    <Box ref={ref} as="section" bg={bg} overflow="hidden" {...sectionProps}>
      <Container py={{ base: 20, md: 24 }}>
        <Heading as="h2" size="xl" color="white">
          {heading}
        </Heading>
        <Box mt={{ base: 16, lg: 24 }} mb={8}>
          {children}
        </Box>
      </Container>
    </Box>
  );
});

export default ColoredSection;

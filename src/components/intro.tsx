import { Center, Container, Text } from '@chakra-ui/react';

interface IntroProps {
  paragraph: string;
}

const Intro = ({ paragraph }: IntroProps) => (
  <Center>
    <Container maxW={{ base: '60ch', lg: '80ch' }} py={{ base: 24, lg: 32 }}>
      <Text
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="bold"
        align={{ base: 'left', md: 'center' }}
        color="gray.300"
      >
        {paragraph}
      </Text>
    </Container>
  </Center>
);

export default Intro;

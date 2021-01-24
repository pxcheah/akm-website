import { Container, Text, TextProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionText = motion.custom<Omit<TextProps, 'transition'>>(Text);

const Tagline = () => (
  <Container maxW="80ch" px={8} color="white" fontWeight="bold" lineHeight={1.2}>
    <Text fontSize={{ base: 'xl', md: '3xl' }} align={{ md: 'center' }} opacity="0.85">
      Need industrial chemicals?
    </Text>
    <MotionText
      fontSize={{ base: '36px', md: '5xl' }}
      align={{ md: 'center' }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ ease: 'easeOut' }}
    >
      We&apos;ve got you covered!
    </MotionText>
  </Container>
);

export default Tagline;

import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ContactForm from './form';
import ContactInfo from './info';

const MotionBox = motion.custom(Box);

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const animation = useAnimation();
  const infoVariants: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const formVariants: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    inView && animation.start('visible');
  }, [animation, inView]);

  return (
    <Container as="section" py={{ base: 20, md: 24 }}>
      <Stack ref={ref} direction={{ base: 'column', lg: 'row' }} spacing={{ base: 8, lg: 16 }}>
        <MotionBox
          animate={animation}
          initial="hidden"
          variants={infoVariants}
          transition={{ ease: 'easeOut', delay: 0.2 }}
          w={{ lg: '40%' }}
          pt={{ lg: 8 }}
        >
          <Heading as="h2" size="xl">
            Drop us a message
          </Heading>
          <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
            We are thrilled to hear what you want to tell us and offer the products you need for your business!
          </Text>
          <ContactInfo d={{ base: 'none', lg: 'block' }} />
        </MotionBox>
        <MotionBox
          animate={animation}
          initial="hidden"
          variants={formVariants}
          transition={{ ease: 'easeOut', delay: 0.2 }}
          flexGrow={1}
        >
          <ContactForm />
        </MotionBox>
        <ContactInfo d={{ base: 'block', lg: 'none' }} />
      </Stack>
    </Container>
  );
};

export default Contact;

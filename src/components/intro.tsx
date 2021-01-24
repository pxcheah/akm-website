import { Center, Container, Text } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Intro = () => {
  const [ref, inView] = useInView({ rootMargin: '-128px', triggerOnce: true });
  const animation = useAnimation();
  const variants: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    inView && animation.start('visible');
  }, [animation, inView]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={variants}
      transition={{ ease: 'easeOut', delay: 0.2 }}
    >
      <Center as="section">
        <Container maxW={{ base: '60ch', lg: '80ch' }} py={{ base: 24, lg: 32 }}>
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            align={{ base: 'left', md: 'center' }}
            color="gray.300"
          >
            We&apos;re a chemical raw material supplier based in Malaysia, offering the finest products from
            well-established principals worldwide.
          </Text>
        </Container>
      </Center>
    </motion.div>
  );
};

export default Intro;

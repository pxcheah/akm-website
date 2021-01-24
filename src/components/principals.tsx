import { Flex, FlexProps, Grid, GridProps, Image, useBreakpointValue } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { PrincipalLogo } from '@/types/home';
import ColoredSection from './colored-section';

interface PrincipalsProps {
  items: PrincipalLogo[];
}

const MotionGrid = motion.custom<Omit<GridProps, 'transition'>>(Grid);
const MotionFlex = motion.custom<Omit<FlexProps, 'transition'>>(Flex);

const Principals = ({ items }: PrincipalsProps) => {
  const tabletItems = items.filter((item) => !item.hideInTablet);
  const displayItems = useBreakpointValue({ base: items, md: tabletItems, xl: items });
  const imageWidth = useBreakpointValue({ base: '120px', lg: '160px' });
  const imageHeight = useBreakpointValue({ base: '52px', lg: '70px' });

  const [ref, inView] = useInView({ triggerOnce: true });
  const animation = useAnimation();
  const variants: Variants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0 },
  };
  const itemVariants: Variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1.2 },
  };

  useEffect(() => {
    if (inView) animation.start('visible');
  }, [animation, inView]);

  return (
    <ColoredSection bg="purple.600" heading="Our principals">
      <MotionGrid
        ref={ref}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
        animate={animation}
        initial="hidden"
        variants={variants}
        transition={{ ease: 'easeOut' }}
      >
        {displayItems?.map(({ name, logo }, index) => (
          <MotionFlex
            variants={itemVariants}
            key={index}
            h={{ base: 32, xl: 40 }}
            align="center"
            justify="center"
            userSelect="none"
            transition={{ duration: 0.5 }}
          >
            <Image
              src={logo}
              alt={name}
              maxW={imageWidth}
              htmlWidth={imageWidth}
              htmlHeight={imageHeight}
              loading="lazy"
            />
          </MotionFlex>
        ))}
      </MotionGrid>
    </ColoredSection>
  );
};

export default Principals;

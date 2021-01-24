import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ProductCategorySlider, { ProductCategorySliderProps } from './slider';

type ProductCategoriesProps = ProductCategorySliderProps;

const ProductCategories = (props: ProductCategoriesProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const animation = useAnimation();
  const variants: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    if (inView) animation.start('visible');
  }, [animation, inView]);

  return (
    <Box ref={ref} as="section" mt={8} mb={{ base: 20, lg: 24 }} overflow="hidden">
      <Container>
        <motion.div
          animate={animation}
          initial="hidden"
          variants={variants}
          transition={{ ease: 'easeOut', delay: 0.2 }}
        >
          <Heading as="h2" size="xl">
            Our products
          </Heading>
          <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
            Discover our vast range of products
          </Text>
          <Box mt={{ base: 8, lg: 16 }}>
            <ProductCategorySlider {...props} />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductCategories;

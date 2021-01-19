import { Box, Container, Heading, Text } from '@chakra-ui/react';

import ProductCategorySlider, { ProductCategorySliderProps } from './slider';

type ProductCategoriesProps = ProductCategorySliderProps;

const ProductCategories = (props: ProductCategoriesProps) => (
  <Box as="section" mt={8} mb={{ base: 20, lg: 24 }} overflow="hidden">
    <Container maxW="container.xl" px={{ base: 8, md: 12 }}>
      <Heading as="h2" size="xl">
        Our products
      </Heading>
      <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
        Discover our vast range of products
      </Text>
      <Box my={{ base: 8, lg: 16 }}>
        <ProductCategorySlider {...props} />
      </Box>
    </Container>
  </Box>
);

export default ProductCategories;

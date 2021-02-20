import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Box, Container, Grid, Heading, Image, Text } from '@chakra-ui/react';

import { ProductCategory } from '@/types/home';
import { getData } from '@/utils/config';
import { ListingCategory, ProductDetails, ProductsConfig } from '@/types/product';

import ProductBox from '@/components/product-box';

const Products = ({ listingCategories }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container>
    <Heading as="h1" size="xl" mt={16}>
      Our Products
    </Heading>
    <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
      Discover our vast range of products
    </Text>
    <Box my={{ base: 8, lg: 16 }}>
      {listingCategories.map((category) => (
        <Grid
          key={category.categoryId}
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          my={{ base: 4, md: 6 }}
          gap={{ base: 4, md: 6 }}
        >
          <ProductBox display={{ base: 'none', lg: 'block' }} bg={category.bg} color="white">
            <Heading as="h2" size="lg">
              {category.name}
              {category.abbreviation && <>&nbsp;({category.abbreviation})</>}
            </Heading>
            <Text mt={8}>
              Usage of FRP. Mainly used in the automotive, building and construction, industrial sector and marine
              industries.
            </Text>
          </ProductBox>
          {category.products.map(({ productId, name, brand, image }) => (
            <ProductBox key={productId} bg="gray.100">
              <Box>
                <Heading as="h3" size="md">
                  {name}
                </Heading>
                <Text mt={2}>{brand}</Text>
              </Box>
              <Image mt={4} src={image} minH={0} alignSelf="center" />
            </ProductBox>
          ))}
        </Grid>
      ))}
    </Box>
  </Container>
);

export default Products;

export const getStaticProps: GetStaticProps<ProductsConfig> = async () => {
  const categories = getData<ProductCategory[]>('categories');
  const products = getData<ProductDetails[]>('products');
  const listingCategories: ListingCategory[] = categories.map((c) => ({
    ...c,
    products: products.filter((p) => p.categoryId === c.categoryId),
  }));

  return { props: { listingCategories } };
};

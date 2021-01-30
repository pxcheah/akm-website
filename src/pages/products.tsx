import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Box, Center, Container, Grid, Heading, Text } from '@chakra-ui/react';

import { ProductCategory } from '@/types/home';
import { getData } from '@/utils/config';
import Link from 'next/link';

const Products = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container>
    <Heading as="h1" size="xl" mt={16}>
      Our Products
    </Heading>
    <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
      Discover our vast range of products
    </Text>
    <Grid templateColumns={{ lg: 'repeat(3, 1fr)' }} my={{ base: 8, lg: 16 }} gap={{ base: 4, md: 6 }}>
      {categories.map(({ categoryId, bg, name, image, imageAlt }, index) => (
        <Link key={index} href={`/${categoryId}`}>
          <Center
            pos="relative"
            h={96}
            p={4}
            bg={bg}
            alignItems="flex-end"
            justifyContent="flex-start"
            cursor="pointer"
            transition="ease 200ms box-shadow"
            _hover={{ boxShadow: 'xl' }}
            role="group"
          >
            <Center pos="absolute" boxSize="calc(100% - 2rem)">
              <Box
                maxW={{ base: '90%', lg: '80%' }}
                maxH="80%"
                transition="ease 200ms transform"
                _groupHover={{ transform: 'scale(1.05)' }}
              >
                <picture>
                  <source type="image/webp" srcSet={image.webp} />
                  <img src={image.png} alt={imageAlt} loading="lazy" />
                </picture>
              </Box>
            </Center>
            <Heading as="h2" pos="relative" zIndex={1} size="lg" color="white">
              {name}
            </Heading>
          </Center>
        </Link>
      ))}
    </Grid>
  </Container>
);

export default Products;

export const getStaticProps: GetStaticProps<{ categories: ProductCategory[] }> = async () => {
  const categories = getData<ProductCategory[]>('product-categories');
  return { props: { categories } };
};

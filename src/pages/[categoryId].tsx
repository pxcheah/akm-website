import { Container, Heading } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { ProductCategory } from '@/types/home';
import { ProductsConfig, ProductsParams } from '@/types/product';
import { getData } from '@/utils/config';

const Products = ({ category }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container>
    <Heading as="h1" size="xl" mt={16}>
      {category.name}
    </Heading>
  </Container>
);

export default Products;

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getData<ProductCategory[]>('product-categories');
  return {
    paths: categories.map(({ categoryId }) => ({
      params: { categoryId },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductsConfig, ProductsParams> = async ({ params }) => {
  const categories = getData<ProductCategory[]>('product-categories');
  const category = categories.find((c) => c.categoryId === params.categoryId);
  return { props: { category } };
};

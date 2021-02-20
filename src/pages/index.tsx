import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { CompanyValue, HomeConfig, PrincipalLogo, ProductCategory } from '@/types/home';
import { getData } from '@/utils/config';

import Hero from '@/components/hero';
import Intro from '@/components/intro';
import ProductCategories from '@/components/product-categories';
import CompanyValues from '@/components/company-values';
import Principals from '@/components/principals';
import Contact from '@/components/contact';

const Home = ({ categories, values, principals }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Hero />
    <Intro />
    <ProductCategories items={categories} />
    <CompanyValues items={values} />
    <Principals items={principals} />
    <Contact />
  </>
);

export default Home;

export const getStaticProps: GetStaticProps<HomeConfig> = async () => {
  const categories = getData<ProductCategory[]>('categories');
  const values = getData<CompanyValue[]>('company-values');
  const principals = getData<PrincipalLogo[]>('principals');
  return { props: { categories, values, principals } };
};

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HomeConfig } from '@/types/home';
import { getData } from '@/utils/config';

import Hero from '@/components/hero';
import Intro from '@/components/intro';
import OurProducts from '@/components/our-products';
import Values from '@/components/values';
import Principals from '@/components/principals';
import Contact from '@/components/contact';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Hero />
    <Intro paragraph={props.intro} />
    <OurProducts />
    <Values list={props.values} />
    <Principals />
    <Contact />
  </>
);

export default Home;

export const getStaticProps: GetStaticProps<HomeConfig> = async () => {
  const props = getData<HomeConfig>('home');
  return { props };
};

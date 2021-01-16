import Hero from '@/components/hero';
import Intro from '@/components/intro';
import AboutUs from '@/components/about-us';
import OurFocus from '@/components/our-focus';
import Principals from '@/components/principals';
import Contact from '@/components/contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      {/* <AboutUs /> */}
      <OurFocus />
      <Principals />
      <Contact />
    </>
  );
};

export default Home;

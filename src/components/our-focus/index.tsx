import { Box, Container, Heading, useTheme } from '@chakra-ui/react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import styles from './styles.module.css';

import OurFocusSlide from './slide';
import Section from '../section';

SwiperCore.use([Pagination]);

const OurFocus = () => {
  const theme = useTheme();
  console.log({ theme });
  // <Box bgGradient="linear(112deg, teal.300 0%, blue.400 65%, blue.500 100%)">
  return (
    <Section bg="blue.400" heading="Our focus">
      <Swiper
        className={styles.sliderContainer}
        slidesPerView={1}
        pagination={{ clickable: true }}
        centerInsufficientSlides
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <SwiperSlide>
          <OurFocusSlide
            image="/images/our-focus/commitment.svg"
            title="Commitment"
            description="We develop relationships that make a positive difference in our customers' lives."
          />
        </SwiperSlide>
        <SwiperSlide>
          <OurFocusSlide
            image="/images/our-focus/quality.svg"
            title="Quality"
            description="We supply outstanding materials and unsurpassed services that, together, deliver premium value to our customers."
          />
        </SwiperSlide>
        <SwiperSlide>
          <OurFocusSlide
            /* TODO: move shadow left -0.5rem */
            image="/images/our-focus/integrity.svg"
            title="Integrity"
            description="We uphold the highest standards of integrity in all of our actions."
            shadowOffset={-2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OurFocusSlide
            image="/images/our-focus/teamwork.svg"
            title="Teamwork"
            description="We work together, across boundaries, to meet the needs of our customers and to help the company win."
          />
        </SwiperSlide>
        <SwiperSlide>
          <OurFocusSlide
            image="/images/our-focus/growth.svg"
            title="Growth"
            description="We value our people, encourage their development and reward their performance."
          />
        </SwiperSlide>
      </Swiper>
    </Section>
    // <Box bg="blue.400" overflow="hidden">
    //   <Container maxW="container.xl" py={{ base: 24, md: 36 }} px={6}>
    //     <Heading as="h2" size="xl" color="white">
    //       Our focus
    //     </Heading>
    //     <Box mt={{ base: 20, md: 32 }} mb={{ base: 8, md: 16 }}>
    //     </Box>
    //   </Container>
    // </Box>
  );
};

export default OurFocus;

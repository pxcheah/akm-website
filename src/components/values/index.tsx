import { Box } from '@chakra-ui/react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import styles from './styles.module.css';

import OurFocusSlide from './slide';
import ColoredSection from '../colored-section';

SwiperCore.use([Pagination]);

const Values = () => (
  <ColoredSection bg="blue.400" heading="What we value">
    <Swiper
      className={styles.sliderContainer}
      slidesPerView={1}
      pagination={{
        el: `.${styles.pagination}`,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.bulletActive,
        clickable: true,
      }}
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
    <Box className={styles.pagination} mt={6} mb={{ base: -4, lg: -12 }} />
  </ColoredSection>
);

export default Values;

import { Box } from '@chakra-ui/react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ColoredSection from '@/components/colored-section';
import { CompanyValue } from '@/types/home';
import ValueSlide from './slide';
import styles from './slider.module.css';

SwiperCore.use([Pagination]);

interface ValuesProps {
  items: CompanyValue[];
}

const CompanyValues = ({ items }: ValuesProps) => (
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
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <ValueSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
    <Box className={styles.pagination} mt={6} mb={{ base: -4, lg: -12 }} />
  </ColoredSection>
);

export default CompanyValues;

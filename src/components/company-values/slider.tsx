import { Box } from '@chakra-ui/react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CompanyValue } from '@/types/home';
import ValueSlide from './slide';
import styles from './slider.module.css';

export interface CompanyValuesSliderProps {
  items: CompanyValue[];
}

SwiperCore.use([Pagination]);

const CompanyValuesSlider = ({ items }: CompanyValuesSliderProps) => (
  <>
    <Swiper
      className={styles.sliderContainer}
      slidesPerView={1}
      pagination={{
        el: '.company-values-pagination',
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
    <Box className="company-values-pagination" mt={6} mb={{ base: -4, lg: -12 }} />
  </>
);

export default CompanyValuesSlider;

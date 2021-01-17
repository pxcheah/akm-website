import type { FunctionComponent } from 'react';
import { Box } from '@chakra-ui/react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import styles from './styles.module.css';

import ColoredSection from '@/components/colored-section';
import OurFocusSlide from './slide';
import { CompanyValue } from '@/types/home';

SwiperCore.use([Pagination]);

interface ValuesProps {
  list: CompanyValue[];
}

const Values: FunctionComponent<ValuesProps> = ({ list }) => (
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
      {list.map((item, index) => (
        <SwiperSlide key={index}>
          <OurFocusSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
    <Box className={styles.pagination} mt={6} mb={{ base: -4, lg: -12 }} />
  </ColoredSection>
);

export default Values;

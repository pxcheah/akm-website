import { HStack, Image, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCategory } from '@/types/home';
import ProductCategorySlide from './slide';
import styles from './slider.module.css';

SwiperCore.use([Navigation]);

export interface ProductCategorySliderProps {
  items: ProductCategory[];
}

const ProductCategorySlider = ({ items }: ProductCategorySliderProps) => (
  <>
    <Swiper
      className={styles.sliderContainer}
      spaceBetween={8}
      navigation={{
        nextEl: '.product-slider-next',
        prevEl: '.product-slider-prev',
        disabledClass: styles.sliderButtonDisabled,
      }}
      breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 16 } }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCategorySlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
    <HStack mt={6} spacing={2} alignItems="flex-start">
      <Image
        src="/images/arrow-left-circle.svg"
        alt="Previous"
        className="product-slider-prev"
        w={12}
        htmlWidth="48"
        htmlHeight="48"
        cursor="pointer"
        transition="ease 200ms opacity"
      />
      <Image
        src="/images/arrow-right-circle.svg"
        alt="Next"
        className="product-slider-next"
        w={12}
        htmlWidth="48"
        htmlHeight="48"
        cursor="pointer"
        transition="ease 200ms opacity"
      />
      <Spacer />
      <NextLink href="/products" passHref>
        <Link color="purple.700" textDecoration="underline">
          All products
        </Link>
      </NextLink>
    </HStack>
  </>
);

export default ProductCategorySlider;

import { Box, Container, Heading, HStack, Image, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCategory } from '@/types/home';
import ProductCategorySlide from './slide';
import styles from './slider.module.css';

SwiperCore.use([Navigation]);

interface ProductCategoriesProps {
  items: ProductCategory[];
}

const ProductCategories = ({ items }: ProductCategoriesProps) => (
  <Box as="section" mt={8} mb={{ base: 20, lg: 24 }} overflow="hidden">
    <Container maxW="container.xl" px={{ base: 8, md: 12 }}>
      <Heading as="h2" size="xl">
        Our products
      </Heading>
      <Text mt={{ base: 4, lg: 6 }} fontSize="lg">
        Discover our vast range of products
      </Text>
      <Box my={{ base: 8, lg: 16 }}>
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
        <HStack spacing={2} mt={6}>
          <Image
            className="product-slider-prev"
            cursor="pointer"
            w={12}
            src="/images/arrow-left-circle.svg"
            alt="Previous"
          />
          <Image
            className="product-slider-next"
            cursor="pointer"
            w={12}
            src="/images/arrow-right-circle.svg"
            alt="Next"
          />
        </HStack>
      </Box>
    </Container>
  </Box>
);

export default ProductCategories;

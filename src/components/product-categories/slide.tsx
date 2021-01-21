import { Box, Center, Heading } from '@chakra-ui/react';

import { ProductCategory } from '@/types/home';

const ProductCategorySlide = ({ bg, name, image, imageAlt }: ProductCategory) => (
  <Center
    pos="relative"
    h={96}
    p={{ base: 4, md: 8 }}
    bg={bg}
    transition="ease 200ms box-shadow"
    _hover={{ boxShadow: 'xl' }}
    role="group"
  >
    <Box
      maxW={{ base: '90%', xl: '80%' }}
      maxH="80%"
      transition="ease 200ms all"
      userSelect="none"
      _groupHover={{ opacity: { base: 1, xl: 0.2 }, transform: 'scale(1.05)' }}
    >
      <picture>
        <source type="image/webp" srcSet={image.webp} />
        <img src={image.png} alt={imageAlt} loading="lazy" />
      </picture>
    </Box>
    <Center
      pos="absolute"
      w="full"
      h="full"
      alignItems={{ base: 'flex-end', xl: 'center' }}
      justifyContent={{ base: 'flex-start', xl: 'center' }}
      p={{ base: 4, xl: 8 }}
      opacity={{ base: 1, xl: 0 }}
      transition="ease 200ms opacity"
      _groupHover={{ opacity: 1 }}
    >
      <Heading
        as="h3"
        size="lg"
        w={{ base: '90%', md: '85%', xl: '100%' }}
        color="white"
        textAlign={{ base: 'left', xl: 'center' }}
        userSelect="none"
      >
        {name}
      </Heading>
    </Center>
  </Center>
);

export default ProductCategorySlide;

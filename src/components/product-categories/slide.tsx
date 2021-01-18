import { Center, Heading, Image } from '@chakra-ui/react';

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
    <Image
      src={image}
      alt={imageAlt}
      maxW="80%"
      maxH="80%"
      transition="ease 200ms opacity"
      userSelect="none"
      _groupHover={{ opacity: 0.2 }}
    />
    <Center pos="absolute" w="full" h="full" opacity={0} transition="ease 200ms opacity" _groupHover={{ opacity: 1 }}>
      <Heading size="lg" color="white" userSelect="none">
        {name}
      </Heading>
    </Center>
  </Center>
);

export default ProductCategorySlide;

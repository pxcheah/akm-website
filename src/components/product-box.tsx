import { Flex, FlexProps, forwardRef } from '@chakra-ui/react';

const ProductBox = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Flex ref={ref} direction="column" justify="space-between" pos="relative" h="512px" p={4} {...props} />
));

export default ProductBox;

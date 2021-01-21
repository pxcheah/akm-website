import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Products = () => (
  <Container>
    <Flex align="center" my={20}>
      <Box>
        <Heading>
          Stay tuned...&nbsp;
          <span role="img" aria-label="pizza">
            🍕
          </span>
        </Heading>
        <Text mt={{ base: 4, lg: 6 }} mb={12}>
          We are working hard to catalogue all our amazing products!
        </Text>
        <Link href="/">
          <Button colorScheme="purple" borderRadius={0}>
            Back to homepage
          </Button>
        </Link>
      </Box>
      <Image
        d={{ base: 'none', xl: 'block' }}
        flexGrow={1}
        maxW="60%"
        h="500px"
        ml={16}
        src="/images/coming-soon.svg"
        alt="Building blocks"
        loading="lazy"
      />
    </Flex>
  </Container>
);

export default Products;

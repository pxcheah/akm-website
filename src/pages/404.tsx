import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const NotFound = () => (
  <Container>
    <Flex align="center" my={20}>
      <Box>
        <Heading>Oops... 👻</Heading>
        <Text mt={{ base: 4, lg: 6 }} mb={12}>
          Sorry, the page you are looking for doesn&apos;t exist
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
        src={`/images/404.svg`}
        alt="404 - Page not found"
        loading="lazy"
      />
    </Flex>
  </Container>
);

export default NotFound;

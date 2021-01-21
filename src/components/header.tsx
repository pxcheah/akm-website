import { Box, Container, Flex } from '@chakra-ui/react';
import Brand from './hero/brand';

const Header = () => (
  <Box as="header" shadow="md">
    <Container>
      <Flex h="4rem" align="center">
        <Brand />
      </Flex>
    </Container>
  </Box>
);

export default Header;

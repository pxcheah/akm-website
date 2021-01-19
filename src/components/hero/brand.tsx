import Link from 'next/link';
import { Flex, Heading, Image, useBreakpointValue } from '@chakra-ui/react';

const Brand = () => {
  const dimension = useBreakpointValue({ base: 48, md: 64 });
  return (
    <Link href="/">
      <Flex align="center" color="white" cursor="pointer" userSelect="none">
        <Image
          src="/images/akm-white.svg"
          alt="Alsey Kimia"
          boxSize={{ base: 12, md: 16 }}
          htmlHeight={dimension}
          htmlWidth={dimension}
        />
        <Heading as="h1" size="md" ml={2}>
          Alsey Kimia
        </Heading>
      </Flex>
    </Link>
  );
};

export default Brand;

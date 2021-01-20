import Link from 'next/link';
import { Flex, Heading, Image, useBreakpointValue } from '@chakra-ui/react';

interface BrandProps {
  white?: boolean;
}

const Brand = ({ white }: BrandProps) => {
  const dimension = useBreakpointValue({ base: 48, md: 64 });
  return (
    <Link href="/">
      <Flex align="center" color={white ? 'white' : 'black'} cursor="pointer" userSelect="none">
        <Image
          src={white ? '/images/akm-white.svg' : '/images/akm.svg'}
          alt="Alsey Kimia"
          boxSize={white ? { base: 12, md: 16 } : 12}
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

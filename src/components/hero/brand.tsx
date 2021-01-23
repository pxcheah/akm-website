import Link from 'next/link';
import { Flex, Heading, Image } from '@chakra-ui/react';

export type BrandSize = 'sm' | 'md' | 'lg';

interface BrandProps {
  size?: BrandSize;
  white?: boolean;
}

const Brand = ({ size = 'md', white }: BrandProps) => {
  const boxSize = size === 'lg' ? 16 : size === 'md' ? 12 : 8;
  const dimension = size === 'lg' ? 64 : size === 'md' ? 48 : 32;
  return (
    <Link href="/">
      <Flex align="center" color={white ? 'white' : 'black'} cursor="pointer" userSelect="none">
        <Image
          src={white ? '/images/akm-white.svg' : '/images/akm.svg'}
          alt="Alsey Kimia"
          boxSize={boxSize}
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

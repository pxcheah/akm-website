import { Flex, Grid, Image } from '@chakra-ui/react';

import { PrincipalsConfig } from '@/types/home';
import ColoredSection from './colored-section';

type PrincipalsProps = PrincipalsConfig;

const Principals = ({ bg, heading, logos }: PrincipalsProps) => (
  <ColoredSection bg={bg} heading={heading}>
    <Grid
      px={4}
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
      rowGap={{ base: 16, xl: 24 }}
      columnGap={{ base: 8, xl: 16 }}
    >
      {logos.map(({ name, logo }, index) => (
        <Flex key={index} maxH="4.5rem" alignItems="center" justifyContent="center">
          <Image maxH="100%" src={logo} alt={name} />
        </Flex>
      ))}
    </Grid>
    {/* <Grid
      px={8}
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
      rowGap={24}
      columnGap={16}
      placeItems="center"
    >
      {logos.map(({ name, logo, hideInTablet }, index) => (
        <Image
          key={index}
          display={{ base: 'block', md: hideInTablet ? 'none' : 'block', xl: 'block' }}
          maxW={40}
          maxH="4.5rem"
          src={logo}
          alt={name}
        />
      ))}
    </Grid> */}
  </ColoredSection>
);

export default Principals;

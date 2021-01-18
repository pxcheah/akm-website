import { Flex, Grid, Image, useMediaQuery, useToken } from '@chakra-ui/react';

import { PrincipalLogo } from '@/types/home';
import ColoredSection from './colored-section';

interface PrincipalsProps {
  items: PrincipalLogo[];
}

const Principals = ({ items }: PrincipalsProps) => {
  const [mdBreakpoint, xlBreakpoint] = useToken('breakpoints', ['md', 'xl']);
  const [isTablet, isWidescreen] = useMediaQuery([`(min-width: ${mdBreakpoint})`, `(min-width: ${xlBreakpoint})`]);
  const displayItems = items.filter(({ hideInTablet }) => {
    if (isWidescreen) return true;
    if (isTablet) return !hideInTablet;
    return true;
  });

  return (
    <ColoredSection bg="purple.600" heading="Our principals">
      <Grid
        px={4}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}
        rowGap={{ base: 16, xl: 24 }}
        columnGap={{ base: 8, xl: 16 }}
      >
        {displayItems.map(({ name, logo }, index) => (
          <Flex key={index} maxH="4.5rem" align="center" justify="center" userSelect="none">
            <Image maxH="100%" src={logo} alt={name} />
          </Flex>
        ))}
      </Grid>
    </ColoredSection>
  );
};

export default Principals;

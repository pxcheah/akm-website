import { Flex, Grid, Image, useBreakpointValue, useMediaQuery, useToken } from '@chakra-ui/react';

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
  const imageWidth = useBreakpointValue({ base: '120px', lg: '160px' });
  const imageHeight = useBreakpointValue({ base: '52px', lg: '70px' });

  return (
    <ColoredSection bg="purple.600" heading="Our principals">
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}>
        {displayItems.map(({ name, logo }, index) => (
          <Flex key={index} h={{ base: 32, xl: 40 }} align="center" justify="center" userSelect="none">
            <Image
              src={logo}
              alt={name}
              maxW={imageWidth}
              htmlWidth={imageWidth}
              htmlHeight={imageHeight}
              loading="lazy"
            />
          </Flex>
        ))}
      </Grid>
    </ColoredSection>
  );
};

export default Principals;

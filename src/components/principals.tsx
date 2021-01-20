import { Flex, Grid, Image, useBreakpointValue } from '@chakra-ui/react';

import { PrincipalLogo } from '@/types/home';
import ColoredSection from './colored-section';

interface PrincipalsProps {
  items: PrincipalLogo[];
}

const Principals = ({ items }: PrincipalsProps) => {
  const tabletItems = items.filter((item) => !item.hideInTablet);
  const displayItems = useBreakpointValue({ base: items, md: tabletItems, xl: items });
  const imageWidth = useBreakpointValue({ base: '120px', lg: '160px' });
  const imageHeight = useBreakpointValue({ base: '52px', lg: '70px' });

  return (
    <ColoredSection bg="purple.600" heading="Our principals">
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}>
        {displayItems?.map(({ name, logo }, index) => (
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

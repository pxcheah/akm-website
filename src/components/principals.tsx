import { Grid, Image } from '@chakra-ui/react';

import ColoredSection from './colored-section';

const Principals = () => (
  <ColoredSection bg="purple.600" heading="Our principals">
    {/* <Box bgGradient="linear(107deg, purple.400, purple.600)"> */}
    <Grid px={8} templateColumns="repeat(5, 1fr)" gap={12} placeItems="center">
      <Image maxH={24} src="/images/principals/polynt.png" alt="Polynt" />
      <Image maxH={24} src="/images/principals/united-initiators.svg" alt="United Initiators" />
      <Image maxH={24} src="/images/principals/tr-industries.svg" alt="TR Industries" />
      <Image maxH={24} src="/images/principals/huntsman.svg" alt="Huntsman" />
      <Image maxH={24} src="/images/principals/lantor.svg" alt="Lantor" />
    </Grid>
  </ColoredSection>
);

export default Principals;

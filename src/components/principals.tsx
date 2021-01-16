import { Grid, Image } from '@chakra-ui/react';

import Section from './section';

const Principals = () => (
  <Section bg="purple.600" heading="Our principals">
    {/* <Box bgGradient="linear(107deg, purple.400, purple.600)"> */}
    <Grid mt={32} mb={16} px={8} templateColumns="repeat(5, 1fr)" gap={12} placeItems="center">
      <Image maxH={24} src="/images/principals/polynt.png" alt="Polynt" />
      <Image maxH={24} src="/images/principals/united-initiators.svg" alt="United Initiators" />
      <Image maxH={24} src="/images/principals/tr-industries.svg" alt="TR Industries" />
      <Image maxH={24} src="/images/principals/huntsman.svg" alt="Huntsman" />
      <Image maxH={24} src="/images/principals/lantor.svg" alt="Lantor" />
    </Grid>
  </Section>
);

export default Principals;

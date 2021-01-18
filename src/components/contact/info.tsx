import { Box, Link, Stack, Text } from '@chakra-ui/react';

const ContactInfo = () => (
  <Stack mt={8} spacing={6}>
    <Box>
      <Text fontWeight="bold">Phone</Text>
      <Link href="tel:+60358829455" _hover={{ textDecoration: 'none' }}>
        +603 5882 9455
      </Link>
    </Box>
    <Box>
      <Text fontWeight="bold">Fax</Text>
      <Text>+603 5882 9755</Text>
    </Box>
    <Box>
      <Text fontWeight="bold">Address</Text>
      <Text>
        10, Jalan Industri PBP 5,
        <br />
        Taman Industri Pusat Bandar Puchong,
        <br />
        47100 Puchong, Selangor
      </Text>
      <Link
        href="https://goo.gl/maps/iqCU5KShD63pBRqS7"
        isExternal
        color="blue.600"
        textDecoration="underline"
        transition="ease 200ms color"
        _hover={{ color: 'blue.700' }}
      >
        See map
      </Link>
    </Box>
  </Stack>
);

export default ContactInfo;

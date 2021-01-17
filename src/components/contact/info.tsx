import { Box, Stack, Text } from '@chakra-ui/react';

const ContactInfo = () => (
  <Stack mt={8} spacing={6}>
    <Box>
      <Text fontWeight="bold">Phone</Text>
      <Text>+603 5882 9455</Text>
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
    </Box>
  </Stack>
);

export default ContactInfo;

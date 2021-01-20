import { Box, Link, Stack, StackProps, Text } from '@chakra-ui/react';

const ContactInfo = (props: StackProps) => (
  <Stack mt={8} spacing={6} {...props}>
    <Text d={{ lg: 'none' }}>Alternatively, you can reach us via:</Text>
    <Box>
      <Text fontWeight="bold">Phone</Text>
      <Link href="tel:+60358829455">+603 5882 9455</Link>
    </Box>
    <Box>
      <Text fontWeight="bold">Fax</Text>
      <Text>+603 5882 9755</Text>
    </Box>
    <Box>
      <Text fontWeight="bold">Email</Text>
      <Link href="mailto:alseykimia@gmail.com">alseykimia@gmail.com</Link>
    </Box>
    <Box>
      <Text fontWeight="bold">Address</Text>
      <Text>
        10, Jalan Industri PBP 5,
        <br />
        Taman Industri Pusat Bandar Puchong,
        <br />
        47100 Puchong, Selangor, Malaysia
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

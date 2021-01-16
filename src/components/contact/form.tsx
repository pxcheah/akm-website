import { Box, Button, Input, Textarea, VStack } from '@chakra-ui/react';

const ContactForm = () => (
  <Box
    flexGrow={1}
    p={8}
    pos="relative"
    boxShadow="xl"
    _before={{
      content: `""`,
      pos: 'absolute',
      left: 0,
      top: 0,
      w: 'full',
      h: 2,
      bgGradient: 'linear(to-r, blue.400, purple.600)',
    }}
  >
    <VStack spacing={4}>
      <Input borderRadius={0} placeholder="Name" />
      <Input borderRadius={0} placeholder="Email" />
      <Textarea borderRadius={0} size="lg" placeholder="Message" resize="vertical" />
    </VStack>
    <Button size="lg" w="200px" mt={8} borderRadius={0} colorScheme="purple">
      Send
    </Button>
  </Box>
);

export default ContactForm;

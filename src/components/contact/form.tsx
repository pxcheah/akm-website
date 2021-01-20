import { Box, Button, FormControl, FormErrorMessage, Input, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { emailRegex } from '@/constants/regex';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = handleSubmit((data: FormData) => {
    console.log({ data });
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 3000);
  });

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      flexGrow={1}
      p={{ base: 6, lg: 8 }}
      pos="relative"
      boxShadow="xl"
      _before={{
        content: '""',
        pos: 'absolute',
        left: 0,
        top: 0,
        w: 'full',
        h: 2,
        bgGradient: 'linear(to-r, blue.400, purple.600)',
      }}
    >
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.name}>
          <Input
            borderRadius={0}
            placeholder="Name"
            name="name"
            autoComplete="name"
            ref={register({ required: true })}
          />
          {errors.name && <FormErrorMessage>Please enter your name</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <Input
            borderRadius={0}
            placeholder="Email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            ref={register({
              required: true,
              pattern: emailRegex,
            })}
          />
          {errors.email && <FormErrorMessage>Please enter a valid email</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <Textarea
            borderRadius={0}
            placeholder="Message"
            rows={12}
            resize="vertical"
            name="message"
            ref={register({ required: true })}
          />
          {errors.message && <FormErrorMessage>Message is required</FormErrorMessage>}
        </FormControl>
      </VStack>
      <Button
        type="submit"
        size="lg"
        w="200px"
        mt={8}
        borderRadius={0}
        colorScheme="purple"
        isLoading={isSending}
        loadingText="Sending"
      >
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;

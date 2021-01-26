import { Box, Button, Collapse, FormControl, FormErrorMessage, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { emailRegex } from '@/constants/regex';

interface FormData {
  name: string;
  company: string;
  email: string; // email
  message: string;
  lastName: string; // honeypot
}

interface FormResponse {
  success?: boolean;
  messageId?: string;
  code?: number;
  message?: string;
}

enum SubmissionProgress {
  Idle,
  Submitting,
  Submitted,
}

const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const [progress, setProgress] = useState<SubmissionProgress>(SubmissionProgress.Idle);
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  const onSubmit = useCallback(
    handleSubmit(async (data: FormData) => {
      // anti-bot
      if (data.lastName) return;

      setProgress(SubmissionProgress.Submitting);
      try {
        const { lastName, ...params } = data;
        const response = await fetch('https://hu3zkeqwn1.execute-api.ap-southeast-1.amazonaws.com/prod/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        });
        const result = (await response.json()) as FormResponse;
        if (result.success) {
          setIsFormSuccess(true);
          reset();
        } else {
          setIsFormSuccess(false);
        }
      } catch (e) {
        setIsFormSuccess(false);
      } finally {
        setProgress(SubmissionProgress.Submitted);
      }
    }),
    [reset]
  );

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
            ref={register({ required: true })}
            borderRadius={0}
            placeholder="Name"
            name="name"
            autoComplete="name"
            aria-label="name"
            size="sm"
          />
          {errors.name && <FormErrorMessage>Please enter your name</FormErrorMessage>}
        </FormControl>
        <FormControl>
          <Input
            ref={register()}
            borderRadius={0}
            placeholder="Company name (optional)"
            name="company"
            autoComplete="company"
            aria-label="company"
            size="sm"
          />
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <Input
            ref={register({
              required: true,
              pattern: emailRegex,
            })}
            borderRadius={0}
            placeholder="Email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-label="email"
            size="sm"
          />
          {errors.email && <FormErrorMessage>Please enter a valid email</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.message}>
          <Textarea
            ref={register({ required: true })}
            borderRadius={0}
            placeholder="Message"
            rows={12}
            resize="vertical"
            name="message"
            aria-label="message"
            size="sm"
          />
          {errors.message && <FormErrorMessage>Message is required</FormErrorMessage>}
        </FormControl>
      </VStack>
      <input type="hidden" ref={register()} name="lastName" />
      <Button
        type="submit"
        size="lg"
        w="200px"
        mt={8}
        borderRadius={0}
        colorScheme="purple"
        isLoading={progress === SubmissionProgress.Submitting}
        loadingText="Sending"
      >
        Send
      </Button>
      <Collapse in={progress === SubmissionProgress.Submitted}>
        <Text pt={2} fontSize="sm" color={isFormSuccess ? 'green.500' : 'red.500'}>
          {isFormSuccess ? 'We have received your message, thank you.' : 'Something went wrong, please try again.'}
        </Text>
      </Collapse>
    </Box>
  );
};

export default ContactForm;

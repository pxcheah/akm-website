import type { FunctionComponent } from 'react';
import { Box, Image, keyframes, useBreakpointValue, useTheme } from '@chakra-ui/react';

const GradientBg: FunctionComponent = ({ children }) => {
  const { colors } = useTheme();
  const {
    teal: { 300: teal },
    blue: { 600: blue },
    purple: { 500: purple },
  } = colors;
  const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

  const patternPosition = useBreakpointValue({
    base: {
      width: '200%',
      bottom: '-24%',
      right: '-85%',
    },
    sm: {
      width: '180%',
      bottom: '-24%',
      right: '-85%',
    },
    md: {
      width: '100%',
      bottom: '-20%',
      right: '-40%',
    },
    lg: {
      width: '80%',
      bottom: '-15%',
      right: '-20%',
    },
    xl: {
      width: '60%',
      bottom: '-32%',
      right: '-20%',
    },
  });

  return (
    <Box
      pos="relative"
      bgGradient={`linear(107deg, ${purple} 0%, ${blue} 60%, ${teal} 100%)`}
      bgSize="200% 200%"
      animation={`${gradient} 30s ease infinite`}
      overflow="hidden"
    >
      <Box pos="absolute" userSelect="none" pointerEvents="none" {...patternPosition}>
        <Image src="/images/akm-white.svg" opacity={0.1} />
      </Box>
      {children}
    </Box>
  );
};

export default GradientBg;

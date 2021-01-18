import type { FunctionComponent } from 'react';
import { Box, keyframes, useTheme } from '@chakra-ui/react';

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
    80% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

  return (
    <Box
      pos="relative"
      bgGradient={`linear(107deg, ${purple} 0%, ${blue} 60%, ${teal} 100%)`}
      bgSize="200% 200%"
      animation={`${gradient} 30s ease infinite`}
    >
      {children}
    </Box>
  );
};

export default GradientBg;

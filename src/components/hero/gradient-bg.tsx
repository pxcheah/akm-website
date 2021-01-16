import { Box, keyframes, useTheme } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

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

  return (
    <Box
      bgGradient={`linear(107deg, ${teal}, ${blue}, ${purple})`}
      bgSize="200% 200%"
      animation={`${gradient} 30s ease infinite`}
    >
      {children}
    </Box>
  );
};

export default GradientBg;

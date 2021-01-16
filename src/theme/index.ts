import { extendTheme } from '@chakra-ui/react';

import { colors } from './foundations/colors';
import { fonts } from './foundations/typography';

const theme = extendTheme({
  colors,
  fonts,
});

export default theme;

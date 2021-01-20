import { extendTheme } from '@chakra-ui/react';

import Container from './components/container';
import colors from './foundations/colors';
import fonts from './foundations/typography';

const theme = extendTheme({
  colors,
  fonts,
  components: {
    Container,
  },
});

export default theme;

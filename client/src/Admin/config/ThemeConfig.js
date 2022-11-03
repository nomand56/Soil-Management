import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints :{
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  colors: {
    brown: {
      900: 'hsl(22, 28%, 21%)',
      800: 'hsl(22, 28%, 29%)',
      700: 'hsl(22, 28%, 37%)',
      600: 'hsl(22, 28%, 45%)',
      500: 'hsl(22, 31%, 52%)',
      400: 'hsl(22, 31%, 60%)',
      300: 'hsl(22, 31%, 67%)',
      200: 'hsl(20, 31%, 74%)',
      100: 'hsl(22, 31%, 81%)',
      50: 'hsl(22, 31%, 88%)',
    },
  },
});

export default theme;

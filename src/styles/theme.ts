// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools';
const breakpoints = createBreakpoints({
  sm: '48rem',
  md: '56rem',
  lg: '76rem',
  xl: '140rem'
})

const theme = extendTheme({ 
  breakpoints,
  colors: {
    blue: {
      910: "#212130",
      920: "#17171E"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
 })

 export default theme
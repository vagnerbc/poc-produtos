import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
  },
  colors: {
    ...theme.colors,
    primary: {
      base: '#0070f3',
    },
  },
})

export default customTheme

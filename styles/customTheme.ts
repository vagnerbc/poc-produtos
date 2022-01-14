import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
  },
  colors: {
    ...theme.colors,
    primary: '#E85A00',
    secondary: '#2E2867',
    background: '#F1F1F1',
    warning: '#C50820',
    black: '#000',
  },
  components: {
    ...theme.components,
    Button: {
      variants: {
        ...theme.components.Button.variants,
        delete: {
          bg: 'warning',
          color: 'white',
          _hover: {
            opacity: 0.8,
          }
        }
      }
    },
    Input: {
      variants: {
        ...theme.components.Input.variants,
        primary: {
          field: {
            border: "1px solid",
            borderColor: "inherit",
            bg: "white",
            _hover: {
              borderColor: "black",
            },
            _readOnly: {
              boxShadow: "none !important",
              userSelect: "all",
            },
            _focus: {
              zIndex: 1,
              borderColor: "black",
              boxShadow: `0 0 0 1px black`,
            },
          },
        }
      }
    }
  }
})

export default customTheme

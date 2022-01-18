import { theme, extendTheme } from '@chakra-ui/react'

type TAccentColorKeys = 'primary' | 'secondary'

const getCustomTheme = (colorKey: TAccentColorKeys) => {
  const primary = colorKey === 'primary' ? '#E85A00' : '#2E2867'
  const secondary = colorKey === 'primary' ? '#2E2867' : '#E85A00'

  return extendTheme({
    fonts: {
      ...theme.fonts
    },
    colors: {
      ...theme.colors,
      primary,
      secondary,
      background: '#F1F1F1',
      warning: '#C50820',
      black: '#000'
    },
    components: {
      ...theme.components,
      Button: {
        variants: {
          ...theme.components.Button.variants,
          savePrimary: {
            bg: 'primary',
            color: 'white',
            _hover: {
              opacity: 0.8
            }
          },
          save: {
            bg: 'primary',
            color: 'white',
            _hover: {
              opacity: 0.8
            }
          },
          delete: {
            bg: 'warning',
            color: 'white',
            _hover: {
              opacity: 0.8
            }
          }
        }
      },
      Input: {
        variants: {
          ...theme.components.Input.variants,
          primary: {
            field: {
              border: '1px solid',
              borderColor: 'inherit',
              bg: 'white',
              _hover: {
                borderColor: 'black'
              },
              _readOnly: {
                boxShadow: 'none !important',
                userSelect: 'all'
              },
              _focus: {
                zIndex: 1,
                borderColor: 'black',
                boxShadow: `0 0 0 1px black`
              }
            }
          }
        }
      }
    }
  })
}

export default getCustomTheme('primary')

export const getThemeWithColor = (colorKey: TAccentColorKeys = 'primary') => {
  return getCustomTheme(colorKey)
}

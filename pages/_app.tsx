import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'
import { store } from 'store'
import { Provider as ReduxProvider } from 'react-redux'
import { getThemeWithColor } from 'styles/customTheme'
import { ChakraProvider } from 'components/atoms'

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line no-constant-condition
  const accentColor = !true ? 'primary' : 'secondary'
  const theme = getThemeWithColor(accentColor)

  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
})

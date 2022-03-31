import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DaisyUIThemeProvider from 'daisyui-themeprovider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DaisyUIThemeProvider>
        <Component {...pageProps} />
    </DaisyUIThemeProvider>

  )
}

export default MyApp

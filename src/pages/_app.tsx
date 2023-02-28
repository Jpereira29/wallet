import { GlobalStyle } from '@/styles/Globals'
import type { AppProps } from 'next/app'
import "../styles/nprogress.css"
import { Router } from 'next/router';

import nProgress from 'nprogress'

Router.events.on("routeChangeStart", (url) => {
  nProgress.start();
})

Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

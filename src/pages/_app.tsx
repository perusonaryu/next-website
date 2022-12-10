import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'src/lib/tailwind.css'
import { Footer } from 'src/component/layout/Footer'
import { Header } from 'src/component/layout/Header'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>塗装くらべる おきなわ</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  )
}

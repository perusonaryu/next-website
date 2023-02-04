/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'

const getInitialProps = createGetInitialProps()
// const [windowHeight, setWindowHeight] = useState(0)
// const [bodyHeight, setBodyHeight] = useState(0)
// useEffect(() => {
//   setWindowHeight(window.innerHeight)
//   setBodyHeight(document.body.clientHeight)
// }, [])

export default class _Document extends Document {
  static getInitialProps = getInitialProps
  render() {
    return (
      <Html>
        <Head />
        <body className="relative h-max pt-[70px] pb-[60px]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

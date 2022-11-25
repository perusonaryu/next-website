/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {
  const buttonStyle = {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    margin: '0 10px',
    borderBottom: '1px solid #000',
    borderRight: '1px solid #000',
    transform: 'rotate(45deg)',
  }

  return (
    <div>
      <Head>
        <title>title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-items-center h-[70px] bg-black text-white px-9">
        <h1 className="text-2xl">
          <Link href="/">HAKU</Link>
        </h1>
        <ul className="flex m-auto">
          <li className="text-sm p-[22px]">
            <Link href="/blog">ブログ</Link>
          </li>
          <li className="text-sm p-[22px]">
            <Link href="/news">お知らせ</Link>
          </li>
          <li className="text-sm p-[22px]">
            <Link href="/company">会社概要</Link>
          </li>
        </ul>
        <div className="flex font-bold">
          <p className="mr-2.5">JP</p>
          <p className="mr-2.5">EN</p>
        </div>
      </header>
      <main>
        <div className="relative flex items-center justify-center max-w-7xl h-[685px] bg-black m-10">
          <p className="text-white">aaaaaaaaa</p>
          <p className="absolute bottom-0 right-0 w-[60px] h-[60px] flex items-center justify-center bg-white">
            <span style={buttonStyle}></span>
          </p>
        </div>
        <div className="h-[600px] relative">
          <h2
            className="z-10 absolute left-[50%] top-[40%] text-3xl"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </h2>
          <Image
            src="/top_image1.jpeg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div className="h-[600px] relative">
          <h2
            className="z-10 absolute left-[50%] top-[30%] text-white text-3xl"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </h2>
          <Image
            src="/top_image2.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div className="grid grid-cols-3">
          <div className="relative h-[600px] overflow-hidden group">
            <div
              className="absolute z-10 top-0 h-[120px] w-[120px] flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(99,0,0,1) 0%,rgba(99,0,0,0) 100%)',
              }}
            >
              <p className="px-6 text-center">HAKUについて</p>
            </div>
            <Image
              src="/top_image3.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
            <p className="absolute bottom-0 text-white leading-[2.7] w-100 px-[40px] py-[70px] opacity-0 group-hover:opacity-100 ease-in delay-300 duration-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard
            </p>
          </div>
          <div className="relative h-[600px] overflow-hidden group">
            <div
              className="absolute z-10 top-0 h-[120px] w-[120px] flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(98,76,0,1) 0%,rgba(98,76,0,0) 100%)',
              }}
            >
              <p className="px-6 text-center">HAKUについて</p>
            </div>
            <Image
              src="/top_image4.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
            <p className="absolute bottom-0 text-white leading-[2.7] w-100 px-[40px] py-[70px] opacity-0 group-hover:opacity-100 ease-in delay-300 duration-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard
            </p>
          </div>
          <div className="relative h-[600px] overflow-hidden group">
            <div
              className="absolute z-10 top-0 h-[120px] w-[120px] flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,47,64,1) 0%,rgba(0,47,64,0) 100%)',
              }}
            >
              <p className="px-6 text-center">HAKUについて</p>
            </div>
            <Image
              src="/top_image5.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
            <p className="absolute bottom-0 text-white leading-[2.7] w-100 px-[40px] py-[70px] opacity-0 group-hover:opacity-100 ease-in delay-300 duration-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2"></div>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home

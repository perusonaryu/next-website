import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Slider } from '@/component/top/Slider'

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
      <main className="pt-[70px]">
        <div className="relative flex items-center justify-center h-[685px] bg-black mx-10 mb-10">
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
            src="/top_image1.jpg"
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
        <div className="flex">
          <div className="relative h-[600px] w-6/12">
            <Image
              src="/top_image_yama.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="h-[600px] w-6/12 flex items-center justify-center px-[130px]">
            <div>
              <h4 className="text-[28px] mb-5">古来からの自然の伝承。</h4>
              <p className="leading-loose">
                アルコール添加を一切行わない全量純米仕込み。酒造りの最後に味や香りを調整することができないため、全工程が真剣勝負。最高品質の酒米と伝統の技術が生み出す銘柄です。
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="relative h-[600px] w-6/12">
            <Image
              src="/top_image_yama.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="h-[600px] w-6/12 flex items-center justify-center px-[130px]">
            <div>
              <h4 className="text-[28px] mb-5">古来からの自然の伝承。</h4>
              <p className="leading-loose">
                アルコール添加を一切行わない全量純米仕込み。酒造りの最後に味や香りを調整することができないため、全工程が真剣勝負。最高品質の酒米と伝統の技術が生み出す銘柄です。
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative h-[600px] w-6/12">
            <Image
              src="/top_image_yama.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="h-[600px] w-6/12 flex items-center justify-center px-[130px]">
            <div>
              <h4 className="text-[28px] mb-5">古来からの自然の伝承。</h4>
              <p className="leading-loose">
                アルコール添加を一切行わない全量純米仕込み。酒造りの最後に味や香りを調整することができないため、全工程が真剣勝負。最高品質の酒米と伝統の技術が生み出す銘柄です。
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="relative h-[600px]">
            <div
              className="absolute z-10 top-0 h-[120px] w-[120px] flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(36,70,3,1) 0%,rgba(36,70,3,0) 100%)',
              }}
            >
              <p className="px-6 text-center">HAKUについて</p>
            </div>
            <Image
              src="/top_image9.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
            <Slider delayVal={2000} />
          </div>
          <div className="relative h-[600px]">
            <div
              className="absolute z-10 top-0 h-[120px] w-[120px] flex items-center justify-center text-white"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(36,70,3,1) 0%,rgba(36,70,3,0) 100%)',
              }}
            >
              <p className="px-6 text-center">HAKUについて</p>
            </div>
            <Image
              src="/top_image1.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
            <Slider delayVal={2500} />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home

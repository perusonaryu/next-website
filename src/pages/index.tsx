import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/legacy/image'
import { MvImageSlider } from 'src/component/top/MvImageSlider'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>塗装くらべる おきなわ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-[70px]">
        <MvImageSlider delayVal={4000} />
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
      </main>
      <footer></footer>
    </div>
  )
}

export default Home

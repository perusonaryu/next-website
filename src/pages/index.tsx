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
      <main>
        <div className="xs:m-[50px] mb-[60px]">
          <MvImageSlider delayVal={4000} />
        </div>
        <div className="flex flex-col xs:flex-row">
          <div className="relative h-[300px] xs:h-[600px] w-full xs:w-6/12">
            <Image
              src="/top_image6.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="xs:h-[600px] w-full xs:w-6/12 flex items-center justify-center xs:px-[130px] px-4 py-[50px]">
            <div>
              <h4 className="text-lg mb-5 flex justify-center">
                塗装くらべるで <br /> 何ができるの？
              </h4>
              <p className="text-sm leading-loose flex justify-center">
                あなたの塗装工事の見積もりが妥当な金額かどうか、くらべることができます。
                登録している会社は自社施工しているところだけ！
                無駄なコストがないため節約できる可能性大です！
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row xs:flex-row-reverse">
          <div className="relative h-[300px] xs:h-[600px] w-full xs:w-6/12">
            <Image
              src="/top_image7.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="xs:h-[600px] w-full xs:w-6/12 flex items-center justify-center xs:px-[130px] px-4 py-[50px]">
            <div>
              <h4 className="text-lg mb-5 flex justify-center">
                塗装くらべるで <br /> 何ができるの？
              </h4>
              <p className="text-sm leading-loose flex justify-center">
                塗装くらべるは
                自社塗装の塗装店の中からあなたに合った会社だけをご紹介します。
                小さな施工会社にとって自社の評判や口コミが一番大事です。
                無責任な提案や作業は一切行いません！
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row">
          <div className="relative h-[300px] xs:h-[600px] w-full xs:w-6/12">
            <Image
              src="/top_image8.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="xs:h-[600px] w-full xs:w-6/12 flex items-center justify-center xs:px-[130px] px-4 py-[50px]">
            <div>
              <h4 className="text-lg mb-5 flex justify-center">
                塗装くらべるで <br /> 何ができるの？
              </h4>
              <p className="text-sm leading-loose flex justify-center">
                特殊な塗装や小規模な工事にも柔軟に対応できる塗装会社をご紹介できます。
                キッチンだけ、トイレだけ、一部屋の壁だけ、外壁の一部だけなどなど。
                アイアンペイント、モールテックス、マグネットペイント、アンティーク調塗装などなど。
                まずはお問い合わせください。
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

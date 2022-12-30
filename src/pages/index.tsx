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
              src="/top_image6.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="h-[600px] w-6/12 flex items-center justify-center px-[130px]">
            <div>
              <h4 className="text-[28px] mb-5">
                塗装くらべるで <br /> 何ができるの？
              </h4>
              <p className="leading-loose">
                あなたの塗装工事の見積もりが妥当な金額かどうか、くらべることができます。
                登録している会社は自社施工しているところだけ！
                無駄なコストがないため節約できる可能性大です！
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="relative h-[600px] w-6/12">
            <Image
              src="/top_image7.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="h-[600px] w-6/12 flex items-center justify-center px-[130px]">
            <div>
              <h4 className="text-[28px] mb-5">
                塗装くらべるで <br /> 何ができるの？
              </h4>
              <p className="leading-loose">
                塗装くらべるは
                自社塗装の塗装店の中からあなたに合った会社だけをご紹介します。
                小さな施工会社にとって自社の評判や口コミが一番大事です。
                無責任な提案や作業は一切行いません！
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="relative h-[600px] w-6/12">
            <Image
              src="/top_image8.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="absolute group-hover:scale-[1.25] ease-in duration-300"
            />
          </div>
          <div className="h-[600px] w-6/12 flex items-center justify-center px-[130px]">
            <div>
              <h4 className="text-[28px] mb-5">
                塗装くらべるで <br /> 何ができるの？
              </h4>
              <p className="leading-loose">
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

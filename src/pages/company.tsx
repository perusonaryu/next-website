import type { NextPage } from 'next'
import Image from 'next/legacy/image'

const Company: NextPage = () => {
  return (
    <div className="pt-[70px]">
      <div className="relative h-[600px] w-full">
        <div
          className="absolute z-10 top-0 left-[10%] h-[180px] w-[180px] flex items-center justify-center text-white"
          style={{
            background:
              'linear-gradient(to bottom, rgba(55,17,0,1) 0%,rgba(55,17,0,0) 100%)',
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
        <p
          className="absolute top-[50%] left-[50%] max-w-[600px] text-white leading-[2.7] w-100 px-[40px] py-[70px]"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </p>
      </div>
      <div className="my-[100px] mx-auto max-w-[860px]">
        <h3 className="flex items-center justify-center h-[130px] w-[130px] bg-black text-white mx-auto mb-[60px]">
          会社概要
        </h3>
        <dt className="w-full">
          <tr className="w-full flex border-solid border-[1px]">
            <td className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              法人名
            </td>
            <td className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              アクティブクリエイション株式会社 （ Active Creation Co., Ltd.）
            </td>
          </tr>
          <tr className="w-full flex border-solid border-[1px] border-t-0">
            <td className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              設立年月日
            </td>
            <td className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              2011年6月2日
            </td>
          </tr>
          <tr className="w-full flex border-solid border-[1px] border-t-0">
            <td className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              代表者
            </td>
            <td className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              古謝毅
            </td>
          </tr>
        </dt>
      </div>
    </div>
  )
}

export default Company

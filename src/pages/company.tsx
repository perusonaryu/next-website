import type { NextPage } from 'next'
import Image from 'next/legacy/image'

const Company: NextPage = () => {
  return (
    <div>
      <div className="relative h-[300px] xs:h-[600px] w-full">
        <div
          className="absolute z-10 top-0 left-0 xs:left-[10%] h-[110px] w-[110px] xs:h-[180px] xs:w-[180px] flex items-center justify-center text-white"
          style={{
            background:
              'linear-gradient(to bottom, rgba(55,17,0,1) 0%,rgba(55,17,0,0) 100%)',
          }}
        >
          <p className="px-6 text-center">KURABERUについて</p>
        </div>
        <Image
          src="/top_image1.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <p
          className="absolute top-[50%] left-[50%] max-w-[600px] text-white leading-[2.7] w-100 xs:px-[40px] xs:py-[70px]"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          住まいのプロとお客さまの架け橋に。
        </p>
      </div>
      <div className="my-[100px] mx-auto max-w-[860px]">
        <h3 className="flex items-center justify-center h-[130px] w-[130px] bg-black text-white mx-auto mb-[60px]">
          会社概要
        </h3>
        <div className="w-full text-xs xs:text-base px-4">
          <div className="w-full flex border-solid border-[1px]">
            <div className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              法人名
            </div>
            <div className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              アクティブクリエイション株式会社 （ Active Creation Co., Ltd.）
            </div>
          </div>
          <div className="w-full flex border-solid border-[1px] border-t-0">
            <div className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              設立年月日
            </div>
            <div className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              2011年6月2日
            </div>
          </div>
          <div className="w-full flex border-solid border-[1px] border-t-0">
            <div className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              資本金
            </div>
            <div className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              3,000,000円
            </div>
          </div>
          <div className="w-full flex border-solid border-[1px] border-t-0">
            <div className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              法人名
            </div>
            <div className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              アクティブクリエイション株式会社 （ Active Creation Co., Ltd.）
            </div>
          </div>
          <div className="w-full flex border-solid border-[1px] border-t-0">
            <div className="w-[20%] h-[60px] flex items-center justify-center border-r-[1px] bg-gray-100">
              代表者
            </div>
            <div className="w-[80%] h-[60px] flex items-center px-[30px] py-[10px]">
              古謝毅
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company

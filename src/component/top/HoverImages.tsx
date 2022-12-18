import Image from 'next/legacy/image'
import { FC } from 'react'

export const HoverImages: FC = () => {
  return (
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
  )
}

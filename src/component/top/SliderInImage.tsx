import Image from 'next/legacy/image'
import { FC } from 'react'
import { Slider } from 'src/component/top/Slider'

export const SliderInImage: FC = () => {
  return (
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
        <Slider delayVal={3000} />
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
        <Slider delayVal={4000} />
      </div>
    </div>
  )
}

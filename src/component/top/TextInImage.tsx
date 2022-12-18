import Image from 'next/legacy/image'
import { FC } from 'react'

export const TxtInImage: FC = () => {
  return (
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
  )
}

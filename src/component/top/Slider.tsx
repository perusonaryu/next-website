import { Carousel } from '@mantine/carousel'
import { createStyles } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/legacy/image'
import { FC, useRef } from 'react'

const images = ['/top_image9.jpg', '/top_image10.jpg', '/top_image_yama.png']

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
  },
  control: {
    ref: getRef('control'),
    color: 'white',
    border: 'none',
    width: '18px',
    height: '18px',
    svg: {
      ref: getRef('svg'),
      height: '50px',
      width: '50px',
    },
  },
}))

type Props = {
  delayVal: number
}

export const Slider: FC<Props> = ({ delayVal }) => {
  const { classes } = useStyles()
  const autoplay = useRef(Autoplay({ delay: delayVal }))
  const slides = images.map((url) => (
    <Carousel.Slide key={url} className="flex justify-center items-center">
      <div className="relative flex justify-center items-center p-[10px] mx-3 bg-white h-[120px] w-[120px]">
        <Image
          src={url}
          alt={'slide'}
          height={100}
          width={100}
          objectFit="cover"
        />
      </div>
      <div className="text-white w-[300px]">
        <p>2021.01.22</p>
        <h5 className="">
          テーマ活用のアイデアを発見できる！ケーススタディギャラリーサイト「TCD
          MUSEUM」
        </h5>
      </div>
    </Carousel.Slide>
  ))
  return (
    <>
      <div
        className="absolute bottom-[20px] left-[50%]"
        style={{ transform: 'translateX(-50%)' }}
      >
        <Carousel
          classNames={classes}
          sx={{ maxWidth: 510 }}
          mx="auto"
          height={120}
          slideGap="md"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
        >
          {slides}
        </Carousel>
      </div>
    </>
  )
}

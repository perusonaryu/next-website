import { Carousel } from '@mantine/carousel'
import { createStyles } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/legacy/image'
import { FC, useRef } from 'react'

const images = [
  '/top_image1.jpg',
  '/top_image2.jpg',
  '/top_image3.jpg',
  '/top_image4.jpg',
  '/top_image5.jpg',
]

const useStyles = createStyles((_theme, _params, getRef) => ({
  container: {
    ref: getRef('container'),
    height: '700px',
    '@media (max-width: 576px)': {
      height: '300px',
    },
  },
}))

type Props = {
  delayVal: number
}

export const MvImageSlider: FC<Props> = ({ delayVal }) => {
  const { classes } = useStyles()
  const autoplay = useRef(Autoplay({ delay: delayVal }))
  const slides = images.map((url) => (
    <Carousel.Slide key={url} className="flex justify-center items-center">
      <div className="flex items-center justify-center">
        <Image src={url} alt={'slide'} layout="fill" />
      </div>
    </Carousel.Slide>
  ))
  return (
    <>
      <div className="relative w-full">
        <Carousel
          classNames={classes}
          mx="auto"
          slideGap="md"
          plugins={[autoplay.current]}
          loop
          draggable={false}
          withControls={false}
        >
          {slides}
        </Carousel>
        <p
          className="absolute z-10 top-[50%] left-[50%]"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          aaaaaaaaaaaaaaaaa
        </p>
      </div>
    </>
  )
}

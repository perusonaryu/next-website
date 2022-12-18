import { Carousel } from '@mantine/carousel'
import { createStyles } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/legacy/image'
import { FC, useRef } from 'react'

const images = ['/top_image9.jpg', '/top_image10.jpg', '/top_image_yama.png']

const useStyles = createStyles((_theme, _params, getRef) => ({
  root: {
    ref: getRef('root'),
    margin: '50px',
    marginRight: '50px!important',
    marginLeft: '50px!important',
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
        <p className="text-white">aaaaaaaaa</p>
      </div>
    </Carousel.Slide>
  ))
  return (
    <>
      <div className="relative w-full">
        <Carousel
          classNames={classes}
          mx="auto"
          height={685}
          slideGap="md"
          plugins={[autoplay.current]}
          loop
          draggable={false}
          withControls={false}
        >
          {slides}
        </Carousel>
      </div>
    </>
  )
}

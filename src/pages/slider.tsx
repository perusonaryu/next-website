import { Carousel } from '@mantine/carousel'
import { createStyles } from '@mantine/core'
import type { NextPage } from 'next'
import Image from 'next/image'

const images = ['/top_image9.jpg', '/top_image10.jpg', '/top_image_yama.png']

const useStyles = createStyles((_theme, _params, getRef) => ({
  control: {
    ref: getRef('control'),
    color: 'white',
    border: 'none',
  },
}))

const Slider: NextPage = () => {
  const { classes } = useStyles()

  const slides = images.map((url) => (
    <Carousel.Slide
      key={url}
      className="flex justify-center items-center bg-black"
    >
      <div className="p-2 bg-white mr-3">
        <Image
          src={url}
          alt={'slide'}
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <p>2021.01.22</p>
        <h5 className="">titletitletitletitle</h5>
      </div>
    </Carousel.Slide>
  ))
  return (
    <>
      <div className="absolute bottom-0">
        <Carousel
          classNames={classes}
          sx={{ maxWidth: 350 }}
          mx="auto"
          withIndicators
          height={120}
          dragFree
          slideGap="md"
        >
          {slides}
        </Carousel>
      </div>
    </>
  )
}
export default Slider

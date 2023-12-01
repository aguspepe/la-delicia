import React from 'react'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section id='home' className='h-[80vh] w-full my-12'>
      <Carousel slideInterval={5000} pauseOnHover>
        <Image
          src={'/assets/hero.webp'}
          alt='hero'
          width={1920}
          height={1080}
          priority
          className='max-h-[80vh] h-full w-full object-cover object-center cursor-default'></Image>
        <Image
          src={'/assets/hero2.webp'}
          alt='hero'
          width={1920}
          height={1080}
          className='max-h-[80vh] h-full w-full object-cover object-bottom cursor-default'></Image>
      </Carousel>
    </section>
  )
}

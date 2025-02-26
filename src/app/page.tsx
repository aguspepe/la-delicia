'use client'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Steps } from '@/components/Steps'
import { Map } from '@/components/Map'
import { Contact } from '@/components/Contact'
import ScrollSpy from 'react-ui-scrollspy'
import { Products } from '@/components/Products'
import { About } from '@/components/About'
import { Whatsapp } from '@/components/Whatsapp'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <main>
        <ScrollSpy useBoxMethod={false}>
          <Hero></Hero>
          <Products></Products>
          <About></About>
          <Steps></Steps>
          <Contact></Contact>
        </ScrollSpy>
      </main>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
      <Analytics></Analytics>
    </>
  )
}

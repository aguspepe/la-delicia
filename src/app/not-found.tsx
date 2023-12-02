import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Nav></Nav>
      <main className='min-h-screen grid place-content-center text-center px-4 pt-24'>
        <h1 className='text-red-500 font-bold text-7xl'>404</h1>
        <h2 className='text-3xl text-slate-600 font-medium mt-4'>
          Ups! Parece que esta página no existe
        </h2>
        <div className='grid sm:grid-cols-3 mt-8 max-w-5xl w-full'>
          <a href='/' className='p-4'>
            <div className=' bg-slate-100 p-6 rounded-lg'>
              <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                <Image
                  src={'/assets/icons/home.png'}
                  alt='home'
                  width={24}
                  height={24}></Image>
              </div>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-2 text-center'>
                Inicio
              </h3>
            </div>
          </a>
          <a href='/#products' className='p-4'>
            <div className=' bg-slate-100 p-6 rounded-lg'>
              <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                <Image
                  src={'/assets/icons/product.png'}
                  alt='home'
                  width={24}
                  height={24}></Image>
              </div>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-2 text-center'>
                Productos
              </h3>
            </div>
          </a>
          <a href='/#contact' className='p-4'>
            <div className=' bg-slate-100 p-6 rounded-lg'>
              <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                <Image
                  src={'/assets/icons/phone-solid.png'}
                  alt='home'
                  width={24}
                  height={24}></Image>
              </div>
              <h3 className='text-lg text-gray-900 font-medium title-font mb-2 text-center'>
                Contacto
              </h3>
            </div>
          </a>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

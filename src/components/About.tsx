import React from 'react'
import { Title } from './Title'
import { WaveBackground } from './WaveBackground'
import Image from 'next/image'

export const About = () => {
  return (
    <section className='bg-red-200 relative my-36 py-16' id='about'>
      <WaveBackground></WaveBackground>
      <div className='grid px-4 max-w-7xl w-full m-auto relative'>
        <Title>Por que elegirnos</Title>
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap w-full mb-8 flex-col items-center text-center'>
              <p className='lg:w-1/2 w-full leading-relaxed '>
                Desde nuestra fundación, en 1957, nos hemos dedicado a
                garantizar el acceso al agua de mesa envasada a la
                población de la ciudad y sus alrededores. Estamos
                comprometidos con la calidad y el servicio que
                brindamos a nuestros clientes.
              </p>
            </div>
            <div className='grid md:grid-cols-3 -m-4'>
              <div className='p-4'>
                <div className='bg-white p-6 rounded-lg'>
                  <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                    <Image
                      src={'/assets/icons/support.png'}
                      alt='customer'
                      width={24}
                      height={24}></Image>
                  </div>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
                    Mantenimiento de dispenser
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Brindamos servicios de mantenimiento y reparación
                    de dispenser
                  </p>
                </div>
              </div>
              <div className='p-4'>
                <div className='bg-white p-6 rounded-lg'>
                  <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                    <Image
                      src={'/assets/icons/delivery.png'}
                      alt='customer'
                      width={24}
                      height={24}></Image>
                  </div>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
                    Entrega a domicilio
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Realizamos entregas en La Plata, Los Hornos, City
                    Bell, San Carlos, Gonnet, Berisso, Tolosa,
                    Ensenada, Melchor, Romero, Altos de San Lorenzo.
                  </p>
                </div>
              </div>
              <div className='p-4'>
                <div className=' bg-white p-6 rounded-lg'>
                  <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                    <Image
                      src={'/assets/icons/customer.png'}
                      alt='customer'
                      width={24}
                      height={24}></Image>
                  </div>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
                    Atención al cliente
                  </h2>
                  <p className='leading-relaxed text-base'>
                    Estamos disponibles para atender consultas y
                    pedidos a través de nuestro WhatsApp y Teléfono
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

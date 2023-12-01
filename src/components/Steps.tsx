import Image from 'next/image'
import React from 'react'
import { Title } from './Title'

export const Steps = () => {
  return (
    <section
      className='text-gray-600 body-font grid gap-12 max-w-7xl w-full px-4 m-auto my-12'
      id='water-process'>
      <Title>Tratamiento del agua</Title>
      <div className='container px-5 mx-auto flex flex-wrap'>
        <div className='flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto'>
          <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
            <div className='h-full w-1 bg-gray-200 pointer-events-none' />
          </div>
          <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm'>
            1
          </div>
          <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center'>
              <Image
                src={'/assets/icons/nitratos.png'}
                alt='nitratos'
                height={64}
                width={64}></Image>
            </div>
            <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
              <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                Extracción de Nitratos:
              </h2>
              <p className='leading-relaxed'>
                Los nitratos son compuestos químicos presentes en el
                agua, principalmente debido a la contaminación. Para
                eliminar nitratos del agua, empleamos procesos de
                intercambio iónico y tecnologías de membranas
                específicas, como la ósmosis inversa.
              </p>
            </div>
          </div>
        </div>
        <div className='flex relative pb-20 sm:items-center md:w-2/3 mx-auto'>
          <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
            <div className='h-full w-1 bg-gray-200 pointer-events-none' />
          </div>
          <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm'>
            2
          </div>
          <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center'>
              <Image
                src={'/assets/icons/osmosis.png'}
                alt='Osmosis'
                height={64}
                width={64}></Image>
            </div>
            <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
              <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                Osmosis Inversa:
              </h2>
              <p className='leading-relaxed'>
                La osmosis inversa es un método eficiente y
                ampliamente utilizado para eliminar una amplia
                variedad de contaminantes del agua, incluidos
                nitratos, sales, metales pesados y microorganismos.
              </p>
            </div>
          </div>
        </div>
        <div className='flex relative pb-20 sm:items-center md:w-2/3 mx-auto'>
          <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
            <div className='h-full w-1 bg-gray-200 pointer-events-none' />
          </div>
          <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm'>
            3
          </div>
          <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center'>
              <Image
                src={'/assets/icons/durezas.png'}
                alt='durezas'
                height={64}
                width={64}></Image>
            </div>
            <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
              <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                Extracción de Durezas:
              </h2>
              <p className='leading-relaxed'>
                Para reducir la dureza del agua, se utilizan procesos
                como el intercambio iónico y la tecnología de
                descalcificación, que reemplaza los iones de calcio y
                magnesio con iones de sodio.
              </p>
            </div>
          </div>
        </div>
        <div className='flex relative pb-10 sm:items-center md:w-2/3 mx-auto'>
          <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
            <div className='h-full w-1 bg-gray-200 pointer-events-none' />
          </div>
          <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm'>
            4
          </div>
          <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center'>
              <Image
                src={'/assets/icons/ozon.png'}
                alt='Ozon'
                height={50}
                width={50}></Image>
            </div>
            <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
              <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                Ozonización:
              </h2>
              <p className='leading-relaxed'>
                El ozono es un poderoso oxidante que se utiliza para
                desinfectar y purificar el agua. Durante el proceso de
                ozonización, el ozono gaseoso es introducido en el
                agua para eliminar bacterias, virus, algas y otros
                microorganismos patógenos. Además, el ozono también
                ayuda a reducir la presencia de compuestos orgánicos y
                mejora la claridad y el sabor del agua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

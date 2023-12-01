import Image from 'next/image'
import { Map } from './Map'
import { Title } from './Title'

export const Contact = () => {
  return (
    <section
      className='text-gray-600 body-font grid max-w-7xl w-full p-4 m-auto items-center my-12'
      id='contact'>
      <Title>Contacto</Title>
      <div className='grid lg:grid-cols-5 gap-12'>
        <Map></Map>
        <div className='lg:col-span-2 grid h-[90%] self-end gap-8'>
          <a
            href='https://www.google.com/maps/place/La+Delicia/@-34.9402101,-57.9793841,17z/data=!4m6!3m5!1s0x95a2e8742e7ff777:0x9a8aa8dfd806a9ad!8m2!3d-34.9403238!4d-57.9792317!16s%2Fg%2F1tdvqx_t?entry=ttu'
            target='_blank'
            className='bg-slate-100 p-12 rounded-lg grid grid-cols-3 items-center'>
            <Image
              src={'/assets/icons/location.png'}
              alt='location'
              width={64}
              height={64}></Image>
            <div className='col-span-2 grid'>
              <h3 className='text-gray-900 title-font text-lg font-medium'>
                Dirección
              </h3>
              <p className='text-gray-500'>
                Calle 49 nº 1972, La Plata, Buenos Aires
              </p>
            </div>
          </a>
          <a
            href='https://wa.me/2215618323'
            target='_blank'
            className='bg-slate-100 p-12 rounded-lg grid grid-cols-3 items-center'>
            <Image
              src={'/assets/icons/whatsapp.png'}
              alt='location'
              width={64}
              height={64}></Image>
            <div className='col-span-2 grid'>
              <h3 className='text-gray-900 title-font text-lg font-medium'>
                WhatsApp
              </h3>
              <p className='text-gray-500'>2215618323</p>
            </div>
          </a>
          <a
            href='tel: + 4706997'
            target='_blank'
            className='bg-slate-100 p-12 rounded-lg grid grid-cols-3 items-center'>
            <Image
              src={'/assets/icons/phone.png'}
              alt='location'
              width={64}
              height={64}></Image>
            <div className='col-span-2 grid'>
              <h3 className='text-gray-900 title-font text-lg font-medium'>
                Teléfono
              </h3>
              <p className='text-gray-500'>4706997</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

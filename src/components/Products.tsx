import Image from 'next/image'
import products from '../../public/data/products.json'
import { Title } from './Title'

export const Products = () => {
  return (
    <section
      className='text-gray-600 body-font grid gap-12 max-w-7xl w-full px-4 m-auto my-12'
      id='products'>
      <Title>Productos</Title>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full text-center'>
        {products.map((product) => (
          <div key={product.name} className='flex flex-col gap-2'>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className='w-full h-96 object-cover object-center'></Image>
            <h3 className='text-gray-900 title-font text-lg font-semibold'>
              {product.name}
            </h3>
            <p>${product.price}</p>
            <a
              href='https://api.whatsapp.com/send/?phone=2215618323&text&type=phone_number&app_absent=0'
              target='_blank'
              className='bg-red-500 px-4 py-2  text-white rounded-lg transition-colors hover:bg-red-400'>
              Pedir
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

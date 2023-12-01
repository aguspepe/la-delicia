import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='text-gray-600 body-font bg-slate-50 mt-24'>
      <div className='container px-4 py-8 mx-auto flex items-center sm:flex-row flex-col max-w-7xl'>
        <a
          href='/'
          className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <Image
            src={'/assets/logo.png'}
            alt='La delicia'
            height={40}
            width={40}></Image>
          <span className='ml-3 text-xl'>La Delicia</span>
        </a>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2024 La Delicia —
          <Link
            href='https://www.linkedin.com/in/bautista-pietraroia/'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'>
            @bautistapietraroia
          </Link>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          Calle 49 nº 1972, La Plata, Buenos Aires
        </span>
      </div>
    </footer>
  )
}

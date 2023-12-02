import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react'
import Image from 'next/image'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { useEffect, useState } from 'react'

const customTheme: CustomFlowbiteTheme['navbar'] = {
  root: {
    base: 'py-2.5 dark:border-gray-700 dark:bg-gray-800 fixed w-full z-50 left-1/2 -translate-x-1/2 bg-white shadow-md top-0  h-fit',
    rounded: {
      on: '',
      off: ''
    },
    bordered: {
      on: 'border',
      off: ''
    },
    inner: {
      base: 'mx-auto flex flex-wrap items-center justify-between max-w-7xl px-4 gap-8',
      fluid: {
        on: '',
        off: 'container'
      }
    }
  },
  brand: {
    base: 'flex items-center'
  },
  collapse: {
    base: 'w-full md:block md:w-auto',
    list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-lg md:font-medium',
    hidden: {
      on: 'hidden',
      off: ''
    }
  },
  link: {
    base: 'block py-2 px-1 md:p-0 relative nav-anchor w-fit transition-colors duration-200 ease-in',
    active: {
      on: 'bg-red-700 text-white dark:text-white md:bg-transparent md:text-red-700',
      off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
    },
    disabled: {
      on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
      off: ''
    }
  },
  toggle: {
    base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
    icon: 'h-6 w-6 shrink-0'
  }
}

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Define el punto de desplazamiento para cambiar de tamaño
      const scrollThreshold = 100

      setIsScrolled(scrollY > scrollThreshold)
    }

    // Agrega el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll)

    // Elimina el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Navbar fluid rounded theme={customTheme} id='navbar'>
      <NavbarBrand href='/'>
        <Image
          alt='La delicia'
          height={70}
          src='/assets/logo.png'
          width={70}
          className={`w-auto object-cover h-12 transition-all ease-in duration-200 ${
            isScrolled ? 'md:h-16' : 'md:h-24'
          }`}></Image>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href='#home' data-to-scrollspy-id='home'>
          Inicio
          <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 transition-all h-1 bg-red-500'></span>
        </NavbarLink>
        <NavbarLink href='#products' data-to-scrollspy-id='products'>
          Productos
          <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 transition-all h-1 bg-red-500'></span>
        </NavbarLink>
        <NavbarLink href='#about' data-to-scrollspy-id='about'>
          Nosotros
          <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 transition-all h-1 bg-red-500'></span>
        </NavbarLink>
        <NavbarLink
          href='#water-process'
          data-to-scrollspy-id='water-process'>
          Tratamiento
          <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 transition-all h-1 bg-red-500'></span>
        </NavbarLink>
        <NavbarLink href='#contact' data-to-scrollspy-id='contact'>
          Contacto
          <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 transition-all h-1 bg-red-500'></span>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

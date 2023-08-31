import React from 'react'
import { Manrope } from 'next/font/google'
import Logo from './Logo'




const manrope = Manrope({subsets: ['latin']})

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 py-[30px] text-white flex flex-row justify-between mx-[5%] px-0 md:px-[5%] lg:px-[5%] xl:px-[5%] border-b-[1px] border-white border-opacity-50 z-20'>
        <Logo />
        <ul className={`hidden md:flex lg:flex xl:flex flex-[0.5] justify-between items-center ${manrope.className}`}>
            <li ><a href='#'>Location</a></li>
            <li ><a href='#'>Blogs</a></li>
            <li ><a href='#'>Testimonials</a></li>
            <li ><a href='#'>Contact</a></li>
        </ul>
        <div className='flex justify-center items-center md:hidden lg:hidden xl:hidden text-3xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M25 7.5L12.5 7.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 15L5 15" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 22.5L17.5 22.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

    </nav>
  )
}

export default Navbar
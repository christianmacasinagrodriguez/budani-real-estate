import React from 'react'
import {NavLink} from 'react-router-dom'
import { Nunito_Sans, Manrope } from 'next/font/google'



const nunito_sans = Nunito_Sans({weight: '700', subsets: ['latin']})
const manrope = Manrope({subsets: ['latin']})

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 py-[30px] text-white flex flex-row justify-between mx-[5%] px-0 md:px-[5%] lg:px-[5%] xl:px-[5%] border-b-[1px] border-white border-opacity-50'>
        <div className='flex items-center cursor-pointer'>
            <div className={`font-${nunito_sans.className} font-bold font-white bg-[#6663E9] w-[53px] h-[53px] flex justify-center items-center rounded-full italic text-2xl`}>
                B
            </div>
            <p className={`font-${manrope.className} ml-5 text-xl flex flex-col`}>
                Budani 
                <span>
                    Real Estate
                </span>
            </p>

        </div>
        <ul className={`hidden md:flex lg:flex xl:flex flex-[0.5] justify-between items-center ${manrope.className}`}>
            <NavLink to={'/'}>Location</NavLink>
            <NavLink to={'/'}>Blogs</NavLink>
            <NavLink to={'/'}>Testimonials</NavLink>
            <NavLink to={'/'}>Contact</NavLink>
            

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
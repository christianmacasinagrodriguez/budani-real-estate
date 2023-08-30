import React from 'react'
import { Nunito_Sans, Manrope } from 'next/font/google'
import {NavLink} from 'react-router-dom'


const nunito_sans = Nunito_Sans({weight: '700', subsets: ['latin']})
const manrope = Manrope({subsets: ['latin']})

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 py-[30px] text-white flex flex-row justify-between mx-[92px] px-[58px] border-b-[1px] border-white border-opacity-50'>
        <div className='flex items-center'>
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
        <ul className={`flex flex-[0.5] justify-between items-center ${manrope.className}`}>
            <NavLink to={'/'}>Location</NavLink>
            <NavLink to={'/'}>Blogs</NavLink>
            <NavLink to={'/'}>Testimonials</NavLink>
            <NavLink to={'/'}>Contact</NavLink>
            

        </ul>
    </nav>
  )
}

export default Navbar
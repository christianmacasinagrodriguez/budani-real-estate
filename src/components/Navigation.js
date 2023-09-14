'use client'
import { Manrope } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const manrope = Manrope({subsets: ['latin']})

function Navigation({ blogActive, contactActive, visibility}) {
  return (
    <ul className={`w-screen md:w-fit lg:w-fit xl:w-fit fixed md:static lg:static xl:static top-[120px] bottom-0 right-0 left-0 ${visibility} md:flex lg:flex xl:flex flex-col md:flex-row  lg:flex-row xl:flex-row gap-2 justify-between items-center  ${manrope.className} bg-[#000000aa] md:bg-transparent lg:bg-transparent xl:bg-transparent py-[70%] md:py-0 lg:py-0 xl:py-0`}>
            {/* <li><a href='/'>Location</a></li> */}
            <Link className={`h-full hover:border-b-4 hover:border-[#6663E9] hover:text-lg p-4 transition-all duration-[4000] ${blogActive ? 'text-lg border-b-4 border-[#6663E9]' : ''}`} href='blog-page'>Blogs</Link>
            {/* <li><a href='/'>Testimonials</a></li> */}
            <Link className={`h-full hover:border-b-4 hover:border-[#6663E9] hover:text-lg p-4 transition-all duration-[4000] ${contactActive ? 'text-lg border-b-4 border-[#6663E9]' : ''}`} href='contact-page'>Contact</Link>
        </ul>
    
  )
}

export default Navigation

import React, { useEffect, useState } from 'react'
import { Manrope } from 'next/font/google'
import Logo from './Logo'

const manrope = Manrope({subsets: ['latin']})

function Navbar( { pageStat }) {

  const [bg_view, setBgView] = useState('')
  useEffect(() => {
    if(pageStat){
      window.addEventListener('scroll', ()=> {
        if(window.scrollY > 800) {
          setBgView('')
        } else {
          setBgView('hidden')
        }
      })

    }
    
  })
  
  return (
    <nav className='fixed top-0 inset-x-0 py-[30px] text-white flex flex-row justify-between mx-[5%] px-0 md:px-[5%] lg:px-[5%] xl:px-[5%] border-b-[1px] border-white border-opacity-50 z-20'>
      <img className={`${bg_view} absolute inset-0 object-cover w-full h-full z-[-5]`} src='https://cdn.pixabay.com/photo/2012/03/04/00/43/architecture-22039_1280.jpg'/>
      <div className={`${bg_view} h-full w-full absolute inset-0 bg-gradient-to-r from-[#000000] to-[#0000001A] z-[-2]`}></div>
        <div className='w-full'>
          <Logo bColor='text-white' nameColor='text-white' />
        </div>
        <ul className={`w-full hidden md:flex lg:flex xl:flex flex-row justify-between items-center  ${manrope.className}`}>
            <li><a href='/'>Location</a></li>
            <li><a href='blog-page'>Blogs</a></li>
            <li><a href='/'>Testimonials</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
        <div className='flex justify-center items-center md:hidden lg:hidden xl:hidden text-3xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M25 7.5L12.5 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 15L5 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 22.5L17.5 22.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

    </nav>
  )
}

export default Navbar
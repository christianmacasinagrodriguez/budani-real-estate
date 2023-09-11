import React, { useEffect, useState } from 'react'
import { Manrope } from 'next/font/google'
import Logo from './Logo'
import Image from 'next/image'

const manrope = Manrope({subsets: ['latin']})

function Navbar( { pageStat, onBlogPage, blogActive, contactActive}) {

  const [bgView, setBgView] = useState('hidden')
  const [navBehavior, setNavBehavior] = useState('fixed')
  const [scrollData, setScrollData ] = useState(0)

  useEffect(() => {
    setImageView()
    setNavbarBehavior()
    
  })
  function setImageView() {
    if(pageStat){
      window.addEventListener('scroll', ()=> {
        if(window.scrollY > 800) {
          setBgView('')
        } else {
          setBgView('hidden')
        }
      })

    }
    if(onBlogPage){
      setBgView('')
    }

  }
  function setNavbarBehavior(){
    let lastScrollTop = 0;
    window.addEventListener('scroll', ()=> {
      setScrollData(window.scrollY)
  
      if (window.scrollY > scrollData) {
        setNavBehavior('hidden')
     } else {
        setNavBehavior('fixed')
     } 
     setScrollData(window.scrollY)
     
      
    })

  }
  
  return (
    <nav className={`${navBehavior} top-0 inset-x-0 py-[30px] text-white flex flex-row justify-between mx-[5%] px-0 md:px-[5%] lg:px-[5%] xl:px-[5%] border-b-[1px] border-white border-opacity-50 z-20`}>
      <Image className={`${bgView} absolute inset-0 object-cover w-full h-full z-[-5]`} src='https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80'/>
      <div className={`${bgView} h-full w-full absolute inset-0 bg-gradient-to-r from-[#000000] to-[#0000001A] z-[-2]`}></div>
        <div className='w-full'>
          <Logo bColor='text-white' nameColor='text-white' />
        </div>
        <ul className={`w-fit hidden md:flex lg:flex xl:flex flex-row gap-2 justify-between items-center  ${manrope.className} `}>
            {/* <li><a href='/'>Location</a></li> */}
            <li><a className={`h-full hover:border-b-4 hover:border-[#6663E9] hover:text-lg p-4 transition-all duration-[4000] ${blogActive ? 'text-lg border-b-4 border-[#6663E9]' : ''}`} href='blog-page'>Blogs</a></li>
            {/* <li><a href='/'>Testimonials</a></li> */}
            <li><a className={`h-full hover:border-b-4 hover:border-[#6663E9] hover:text-lg p-4 transition-all duration-[4000] ${contactActive ? 'text-lg border-b-4 border-[#6663E9]' : ''}`} href='contact-page'>Contact</a></li>
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
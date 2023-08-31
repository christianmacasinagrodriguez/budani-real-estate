import React from 'react'
import { Manrope } from 'next/font/google'
import BottomLogo from '@/components/BottomLogo'

const manrope = Manrope({subsets: ['latin']})

function Hero() {
  return (
    <section className='h-fit w-screen relative flex flex-row justify-start items-center   overflow-hidden box-border pb-[100px]'>     
      <img className='w-screen h-screen absolute inset-0  object-cover object-center z-[-5]' src='https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero-image'></img>
      <div className='h-screen w-screen absolute inset-0 bg-gradient-to-r from-[#000000] to-[#0000001A] z-[-4]'>
      </div>
      
      <div className={`h-screen w-100% font-${manrope.className} flex flex-col  justify-center gap-y-6 px-[5%] mx-[5%]`}>
        <h1 className='flex flex-col text-white font-extrabold text-7xl w-full md:w-[60%] lg:w-[60%] leading-[115%] tracking-[0.72px]'>
          Home That Makes You Living Life!   
          </h1>
        <p className='text-white text-opacity-80 font-medium w-100% md:w-[35%] lg:w-[35%] leading-[170%]'>Are you looking for amazing Real estate? Don’t worry! We got it for you!</p>
        <button className='text-white font-extrabold w-full md:w-[201px] lg:w-[201px] h-[62px] bg-[#6663E9] rounded-full'>Learn More</button>
      </div>
      <BottomLogo />
     


    </section>
  )
}

export default Hero
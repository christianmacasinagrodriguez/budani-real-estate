import { Manrope } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const manrope = Manrope({subsets: ['latin']})

function Feature() {
  return (
    <div className={`font-${manrope.className} grid grid-rows-2 gap-y-[200px]`}>
        <div className='h-fit w-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-[137px]'>
            <div className='h-[257px] md:h-[456px] lg:h-[456px] w-[90%] bg-[#6663E9] rounded-r-[70px] flex flex-row justify-end items-end self-center order-2 md:order-2 lg:order-1 shadow-[0px_4px_60px_0px_rgba(0, 0, 0, 0.05)]'>  
                <div className='w-[292px] h-[292px] md:w-[518px] md:h-[518px] lg:w-[518px] lg:h-[518px] relative z-[1] mb-[67px]'>
                    <Image className='w-full h-full object-cover object-center rounded-[50px] ' src='https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80' alt='featured-image'/>     
                    <div className='w-[238px] h-[238px] md:w-[422px] md:h-[422px] lg:w-[422px] lg:h-[422px]  absolute bottom-0 -ml-[27px] z-[-1] -mb-[27px] bg-white rounded-[65px] shadow-[0px_4px_60px_0px_rgba(0, 0, 0, 0.05)]'></div>                 
                </div>                    
            </div>
            <div className='w-[90%] md:w-[90%] lg:w-[70%] h-fit px-[5%] mx-[5%] flex flex-col justify-start items-start order-1 md:order-1 lg:order-2 py-[100px] mt-[-100px]'>
                <h1 className='text-[#27292E] font-extrabold text-6xl leading-[135%] tracking-[0.6px] mb-[30px]'>
                    Modern, Trendy, Affordable!
                </h1>
                <p className='text-[#585C65] text-lg leading-[180%] font-medium mb-[45px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <button className='w-[219px] h-[62px] flex flex-row self-start justify-center items-center text-lg text-white font-extrabold leading-[180%] bg-[#6663E9] rounded-[30px] shadow-[0px_4px_60px_0px_rgba(0, 0, 0, 0.05)]'> Early Bird Book </button>

            </div>
        </div>

        <div className='h-fit w-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-[137px]'>
            <div className='h-[257px] md:h-[456px] lg:h-[456px] w-[90%] bg-[#6663E9] rounded-l-[70px] flex flex-row justify-start items-end self-center justify-self-end order-2 md:order-2 lg:order-2 shadow-[0px_4px_60px_0px_rgba(0, 0, 0, 0.05)]'>  
                <div className='w-[292px] h-[292px] md:w-[518px] md:h-[518px] lg:w-[518px] lg:h-[518px] relative z-[1] mb-[67px]'>
                    <img className='w-full h-full object-cover object-center rounded-[50px] ' src='https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1896&q=80' alt='featured-image'/>     
                    <div className='w-[238px] h-[238px] md:w-[422px] md:h-[422px] lg:w-[422px] lg:h-[422px]  absolute bottom-0 -mr-[27px] z-[-1] -mb-[27px] right-0 bg-white rounded-[65px] shadow-[0px_4px_60px_0px_rgba(0, 0, 0, 0.05)]'></div>                 
                </div>                    
            </div>
            <div className='w-[90%] md:w-[90%] lg:w-[70%] h-fit px-[5%] mx-[5%] flex flex-col justify-start items-start order-1 md:order-1 lg:order-1 py-[100px] mt-[-100px] pl-[10%]'>
                <h1 className='text-[#27292E] font-extrabold text-6xl leading-[135%] tracking-[0.6px] mb-[30px]'>
                    Unique House for Long Term!
                </h1>
                <p className='text-[#585C65] text-lg leading-[180%] font-medium mb-[45px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <button className='w-[219px] h-[62px] flex flex-row self-start justify-center items-center text-lg text-white font-extrabold leading-[180%] bg-[#6663E9] rounded-[30px] shadow-[0px_4px_60px_0px_rgba(0, 0, 0, 0.05)]'> Early Bird Book </button>

            </div>
        </div>
        
    </div>
  )
}

export default Feature
import React from 'react'
import { Manrope } from 'next/font/google'

const manrope = Manrope({subsets: ['latin']})

function NewsLetterCTA() {
  return (
    <div className={`h-fit w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%] bg-[#6663E9] flex flex-col font-${manrope.className} items-center rounded-[70px] p-[80px]`}>
        <h1 className='w-full md:w-full lg:w-full xl:w-[70%] text-white text-6xl font-extrabold leading-[135%] flex flex-col text-center mb-[30px]'>
            Subscribe to Our Newsletter For Weekly Article Update.
      
        </h1>
        <p className=' w-full md:w-full lg:w-full xl:w-[60%] text-white text-lg font-normal  leading-[180%] flex flex-col self-center text-center mb-[60px]'>
            We have real estate-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.
        </p>
        <div className='w-full md:w-[90%] lg:w-full xl:w-[60%] text-white flex flex-col md:flex-row lg:flex-row gap-[20px] self-center'>
            <label className='relative w-full h-[61px] flex flex-row bg-[#5654D1] rounded-[40px]'>
                <svg className='absolute left-[23px] inset-y-0 my-auto' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <path d="M4.5 4.5H22.5C23.7375 4.5 24.75 5.5125 24.75 6.75V20.25C24.75 21.4875 23.7375 22.5 22.5 22.5H4.5C3.2625 22.5 2.25 21.4875 2.25 20.25V6.75C2.25 5.5125 3.2625 4.5 4.5 4.5Z" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.75 6.75L13.5 14.625L2.25 6.75" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input className='w-full ml-[70px]  bg-transparent' type='email' placeholder='Enter your e-mail address'/>
            </label>       
            <button className='w-full md:w-[174px] lg:w-[174px] h-[61px]  bg-white text-[#6663E9] text-lg font-extrabold leading-[180%] rounded-[40px]'>Subscribe</button>
        </div>
        
    </div>
  )
}

export default NewsLetterCTA
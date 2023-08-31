import React from 'react'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

function RealEstates() {
  return (
    <section className={`h-screen w-screen bg-green-300 ${manrope.className}`}>
        <div className='flex justify-center w-full'>
            <h1 className='flex justify-center items-center w-[90%] md:w-[70%] lg:w-[40%] xl:w-[30%] font-extrabold text-6xl leading-[135%] tracking-[0.6px]'>Our Best Estate,  are Modern!</h1>
        

        </div>
        
    </section>
  )
}

export default RealEstates
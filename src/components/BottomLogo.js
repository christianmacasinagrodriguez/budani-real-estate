'use client'
import React from 'react'
import Logo from './Logo'

function BottomLogo({ occurrence }) {
  const array = [...Array(occurrence)]

  return (
    <div className=' h-fit w-[90%] inset-x-0 absolute bottom-0 mb-[-10px] grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-8 bg-white p-16 rounded-[30px] mx-auto drop-shadow-[0px_20px_60px_rgba(0, 0, 0, 0.03)]'>
      {console.log(occurrence)}

      {
        array.map( ()=> <Logo bColor='text-white' nameColor='text-[#3C414E]'/>)  
      }
        

    </div>
  )
}

export default BottomLogo
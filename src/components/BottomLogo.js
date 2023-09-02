import React from 'react'
import Logo from './Logo'

function BottomLogo() {
  return (
    <div className=' h-fit w-[90%] inset-x-0 absolute bottom-0 mb-[-10px] grid-cols-2 md:grid-cols-3 grid lg:grid-cols-5 gap-8 bg-white p-16 rounded-[30px] mx-auto drop-shadow-[0px_20px_60px_rgba(0, 0, 0, 0.03)]'>
        <Logo bColor='text-white' nameColor='text-[#3C414E]'/>
        <Logo bColor='text-white' nameColor='text-[#3C414E]'/>
        <Logo bColor='text-white' nameColor='text-[#3C414E]'/>
        <Logo bColor='text-white' nameColor='text-[#3C414E]'/>
        <Logo bColor='text-white' nameColor='text-[#3C414E]'/>
        

    </div>
  )
}

export default BottomLogo
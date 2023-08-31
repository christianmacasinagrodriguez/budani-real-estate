import React from 'react'
import Logo from './Logo'

function BottomLogo() {
  return (
    <div className=' h-fit w-[90%] inset-x-0 absolute bottom-0 mb-[-10px] grid grid-cols-5 bg-white p-16 rounded-[30px] mx-auto'>
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        

    </div>
  )
}

export default BottomLogo
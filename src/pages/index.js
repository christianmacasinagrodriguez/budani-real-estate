import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Manrope } from 'next/font/google'
import Hero from '@/sections/Hero'
import Navbar from '@/components/Navbar'


const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <BrowserRouter>
      <Navbar />
      <main
      className={` ${manrope.className}`}
      >
      <Hero />
      
      </main>

    </BrowserRouter>

    
  )
}

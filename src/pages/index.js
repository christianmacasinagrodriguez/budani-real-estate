import React from 'react'
import { Manrope } from 'next/font/google'
import Hero from '@/sections/Hero'
import Navbar from '@/components/Navbar'
import RealEstates from '@/sections/RealEstates'
import Features from '@/sections/Features'


const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='overflow-y-auto'>
      <Navbar />
      <main
      className={` ${manrope.className}`}
      >
      <Hero />
      <RealEstates />
      <Features />

      
      </main>

    </div>

    
  )
}

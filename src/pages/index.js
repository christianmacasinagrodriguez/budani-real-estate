import Image from 'next/image'
import { Manrope } from 'next/font/google'
import Hero from '@/sections/Hero'
import { BrowserRouter } from 'react-router-dom'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <BrowserRouter>
      <main
      className={` ${manrope.className}`}
      >
      <Hero />
      
      </main>

    </BrowserRouter>

    
  )
}

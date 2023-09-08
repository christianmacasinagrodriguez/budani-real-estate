import Navbar from '@/components/Navbar'
import Footer from '@/sections/Footer'
import React, { useEffect, useState } from 'react'
import { Manrope } from 'next/font/google'

const manrope = Manrope({subsets: ['latin']})

function Blog() {
    const [currentBlogData, setCurrentBlogData] = useState({})
    
    useEffect( () => {
        setCurrentBlogData(JSON.parse(localStorage.getItem('blogData'))) 
        
         
    }, [])
   
  return (
    <div className='w-screen h-fit bg-[#F6F8FA]'>
        <Navbar  pageStat={false} onBlogPage={true} blogActive={true} contactActive={false}/>
        <main className={`p-[200px] h-fit font-${manrope.className}`}>
            <section className='flex - flex-col gap-y-[48px]'>
                <img className='w-full h-fit' src={`${currentBlogData.imageSRC}`}/>
                <h1 className='text-6xl text-black px-[20%] leading-[120%]'>
                    {currentBlogData.blogTitle}
                </h1>
                <div className='flex flex-col gap-[24px]'>
                    <p className='text-lg text-black leading-[180%] px-[20%]'>
                        {currentBlogData.blogContent}
                       
                    </p>
                   
                </div>
                

            </section>
        </main>
        <Footer />

    </div>
    

  )
}

export default Blog
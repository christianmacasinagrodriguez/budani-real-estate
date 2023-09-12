import Navbar from '@/components/Navbar'
import Footer from '@/sections/Footer'
import React, { useEffect, useState } from 'react'
import { Manrope } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const manrope = Manrope({subsets: ['latin']})

function Blog() {
    const [currentBlogData, setCurrentBlogData] = useState({})
    
    useEffect( () => {
        setCurrentBlogData(JSON.parse(localStorage.getItem('blogData'))) 
        
         
    }, [])
   
  return (
    <>
        <Navbar  pageStat={false} onBlogPage={true} blogActive={true} contactActive={false}/>
        <Head>
            <title>{currentBlogData.blogTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <main className={`w-screen bg-[#F6F8FA] px-[5%] md:px-[200px] lg:px-[200px] xl:px-[200px] py-[200px] h-fit font-${manrope.className}`}>
            <section className='flex - flex-col gap-y-[48px]'>
                <Image width='20000' height='20000' className='w-full h-fit' src={currentBlogData.imageSRC} alt='blog-featured-image'/>
                <h1 className='text-6xl text-black px-0 md:px-[20%] lg:px-[20%] xl:px-[20%] leading-[120%]'>
                    {currentBlogData.blogTitle}
                </h1>
                <div className='flex flex-col gap-[24px]'>
                    <p className='text-lg text-black leading-[180%] px-0 md:px-[20%] lg:px-[20%] xl:px-[20%]'>
                        {currentBlogData.blogContent}
                       
                    </p>
                   
                </div>
                

            </section>
        </main>
        <Footer />

    </>
    

  )
}

export default Blog
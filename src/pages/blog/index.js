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
    console.log(currentBlogData.blogContent)
    // setContentArr(currentBlogData.blogContent.split('\n'))
      
  
  return (
    <div className='w-screen h-fit bg-[#F6F8FA]'>
        <Navbar  pageStat={false} onBlogPage={true}/>
        <main className={`p-[200px] h-fit font-${manrope.className}`}>
            <section className='flex - flex-col gap-y-[48px]'>
                <img className='w-full h-fit' src={`${currentBlogData.imageSRC}`}/>
                <h1 className='text-6xl text-black px-[20%] leading-[120%]'>
                    {currentBlogData.blogTitle}
                </h1>
                <div className='flex flex-col gap-[24px]'>
                {/* {contentArr.map( content => (
                        <p className='text-lg text-black leading-[180%] px-[20%]'>
                            { content }
                        </p>
                    ))}
                    {((currentBlogData.blogContent.replaceAll('<p>','')).replaceAll('</p>', '')).split('\n').map( content => (
                        <p className='text-lg text-black leading-[180%] px-[20%]'>
                            { content }
                        </p>
                    ))} */}
                </div>
                

            </section>
        </main>
        <Footer />

    </div>
    

  )
}

export default Blog
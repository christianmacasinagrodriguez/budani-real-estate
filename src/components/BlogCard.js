import React from 'react'

// http://chriscosmos-real-state.local/wp-content/uploads/2023/08/wp_dummy_content_generator_6.jpg
// http://chriscosmos-real-state.local/voluptatem-atque-distinctio-ullam-ut/wp_dummy_content_generator_6-jpg

function BlogCard({ imageSRC, postDate, blogTitle }) {
  return (
    <div className='w-fit h-fit flex flex-col bg-white hover:-translate-y-2 transition-all duration-500'>
        <div className='w-full md:w-[385px] lg:w-[385px] h-[230px]'>
            <img className='w-full h-full object-cover object-center' src={ imageSRC } alt='blog-image' />
        </div>
        <div className='w-[100%] md:w-[385px] lg:w-[385px] flex flex-col gap-5 items-center py-[27px] px-5'>
            <p className='text-[#585C65] text-lg leading-[180%] font-medium'>
                { postDate }
            </p>
            <h2 className='w-full text-2xl font-bold  text-[#3C414E] truncate hover:cursor-pointer'>
                    { blogTitle }
            </h2>
        </div>

    </div>
  )
}

export default BlogCard
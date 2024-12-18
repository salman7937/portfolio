import React from 'react'
import Form from './Form'
function Contact() {
  return (
    <div className='flex flex-wrap justify-center items-center'>
    <div className=' flex  flex-wrap max-w-[1280px] justify-center  px-2 md:px-8 gap-[108px] '>
       <Form/>
       <div className='max-w-[608px] py-5 flex flex-col  gap-6 ' >
        <h1 className='font-extrabold md:text-5xl text-[28px] tracking-[-2%] md:pr-8'>Let's <span className='outlined-text'>Talk </span>for something Special</h1>
        <p className='text-base text-[#71717A] '>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
        <h3 className=' md:text-[28px]  text-xl font-semibold'>salmanahmed7937@email.com</h3>
        <h2 className='text-[28px] text-xl font-semibold'>03110530006</h2>
      
        </div> 
    </div>
    </div>
  )
}

export default Contact

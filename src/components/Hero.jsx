import React from 'react'
import Banner from "../assets/Banner.png"
import SocialBtn from './SocialBtn'
function Hero() {
  return (
    <div className='mx-8  grid grid-cols-1 md:grid-cols-2 mt-[80px] '>
      <div className='flex flex-col  justify-between  md:order-1 order-2'>
        <div className=''>
          <h2 className=' md:text-5xl text-2xl tracking-[-2%] max-w-[600px] p-5'>
            Hello i'am <span className='font-extrabold'>Evren shah. </span> <span className='font-extrabold '>Frontend</span> <span className='outlined-text font-bold' >developer</span> Based in <span className='font-extrabold' > india.</span>

          </h2>
          <p className=' text-base tracking-[2%] p-5 text-[#71717A]'>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
        </div>
        <div className=''>
          <SocialBtn />
        </div>
      </div>
      <div className='  relative bottom-10  md:right-20  right-4 order-1 md:order-2 '>
        <img  className='w-[889px]' src={Banner}  alt="bannerImg" />
      </div>

    </div>
  )
}

export default Hero
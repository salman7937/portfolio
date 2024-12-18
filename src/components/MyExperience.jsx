import React from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoYoutube } from 'react-icons/io'
import { experience } from '../utils/Data'

function MyExperience() {
  return (
    <div className='bg-black space-y-[60px] py-[60px] mt-[100px] '>
      <h1 className=' md:text-5xl text-[28px] tracking-[-2%] flex items-center justify-center text-white gap-4'> My <span className='font-extrabold'>Experience</span></h1>
      <div className='flex  items-center justify-center flex-col md:mx-14 mx-6 text-white gap-5'>
        {
          experience.map((exp) => {
            return (
              <div key={exp.id} className=' border border-[#71717A] md:mx-9  mx-0  md:py-[30px] py-[14px] md:px-6 p-4 space-y-7 group hover:bg-[#27272A] cursor-pointer transition-all duration-200 rounded-[10px]'>
                <div className='flex justify-between flex-wrap '>
                  <div className='flex items-center gap-[30px] '>
                    {getIconComponent(exp.icon)}
                    <h4 className=' md:text-2xl  text-base text-white tracking-[-2%]'>{exp.title}</h4>
                  </div>
                  <div className='mt-[30px] md:mt-0'>
                    {exp.date}
                  </div>
                </div>
                <p className='text-white text-base tracking-[-2%] '>{exp.desc}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}



function getIconComponent(iconName) {
  switch (iconName) {
    case 'FcGoogle':
      return <FcGoogle className='bg-black text-[32px]  group-hover:bg-[#27272A] transition-all ' />;
    case 'FaApple':
      return <FaApple className='bg-black text-[32px]  group-hover:bg-[#27272A] transition-all ' />;
    case 'IoLogoYoutube':
      return <IoLogoYoutube className='bg-black text-[32px]  group-hover:bg-[#27272A] transition-all ' />;

    default:
      return null;
  }
}

export default MyExperience
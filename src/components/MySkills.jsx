import React from 'react'
import { FaGitAlt, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiNestjs, SiSocketdotio, SiStorybook } from 'react-icons/si'
import { skills } from '../utils/Data'

function MySkills() {
        return (
                <div className='flex flex-col justify-center md:block my-10 '>

                        <h1 className='flex items-center justify-center tracking-[-2%]  md:text-5xl text-[28px] gap-4'>My <span className='font-extrabold  '> skills</span>
                        </h1>

                        <div className='  mx-12 grid place-items-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-16 md:gap-10 sm:gap-6 gap-4 mt-12   '>
                                
                                {
                                        skills.map((menu) => {
                                                return (
                                                        <div  key={menu.id}className='flex items-center justify-center w-[186px] h-[186px] border border-black rounded-sm p-6 hover:bg-black hover:text-white transition-all duration-500  cursor-pointer flex-col gap-8 font-bold text-xl' >
                                                                <div className='text-[56px]'>{getIconComponent(menu.icon)}</div>
                                                                <div className=''>{menu.title}</div>

                                                        </div>
                                                )
                                        })
                                }

                        </div>
                </div>
        )

}

function getIconComponent(iconName) {
        switch (iconName) {
                case 'FaGitAlt':
                        return <FaGitAlt />;
                case 'IoLogoJavascript':
                        return <IoLogoJavascript />;
                case 'FaSass':
                        return <FaSass />;
                case 'SiNestjs':
                        return <SiNestjs />;
                case 'SiStorybook':
                        return <SiStorybook />;
                case 'SiSocketdotio':
                        return <SiSocketdotio />;
                default:
                        return null;
        }
}

export default MySkills

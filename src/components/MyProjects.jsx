import React from 'react'
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import { HiOutlineExternalLink } from 'react-icons/hi'
import { projects } from '../utils/Data'
function MyProjects() {
    return (
        <div className='bg-black text-white flex items-center flex-col px-4 ' >
            <h1 className=' md:text-5xl text-[28px] tracking-[-2%] text-white flex items-center justify-center mt-10' >My<span className='font-extrabold text-white'>Projects</span></h1>

            {
                projects.map((proj) => {
                    return (
                        <div key={proj.id} className={` flex flex-col  justify-between items-center max-w-[1216px] py-5 gap-10 ${proj.isLeft?"md:flex-row":"md:flex-row-reverse"} ` }>
                            <div>
                                <img width={530} src={proj.imgUrl} alt="" />
                            </div>
                            <div className='gap-6 flex flex-col max-w-[582px]'>
                                <h1 className='font-extrabold md:text-5xl text-2xl tracking-[-2%] '>{proj.titleNo}</h1>
                                <h2 className=' md:text-[32px] text-xl'>{proj.title}</h2>
                                <p className='text-[#71717A] text-[16px] tracking-[2%] '  >{proj.desc}</p>
                                <a href={proj.url}>
                                    <HiOutlineExternalLink className='text-xl' />
                                </a>
                            </div>
                        </div>
                    )
                })}


        </div>
    )
}

export default MyProjects
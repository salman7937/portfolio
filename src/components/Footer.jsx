import React from 'react'
import image  from "../assets/logo2.png"
function Footer() {
    return (
        <div className='bg-black text-white md:mt-[60px] mt-10 py-6 md:px-20 px-4 flex md:flex-row  flex-col justify-between items-center'>
            <div className='flex items-center  gap-3' >
                <img src={image} alt="" />
                <h5 className=' md:text-xl text-lg font-bold tracking-[-2%] '>Salman Ahmad</h5>

            </div>
            <div className=' flex flex-col items-end md:text-base text-sm '>
                <p>copyright © 2025 All rights reserverd. </p>
                
                
            </div>

        </div>
    )
}

export default Footer
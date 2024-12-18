import React from 'react'
import image  from "../assets/logo2.png"
function Footer() {
    return (
        <div className='bg-black text-white md:mt-[60px] mt-10 py-6 px-20 flex justify-between items-center'>
            <div className='flex items-center  gap-3' >
                <img src={image} alt="" />
                <h5 className='text-xl font-bold tracking-[-2%] '>Salman Ahmad</h5>

            </div>
            <div className=' flex flex-col items-end '>
                <p>copyright © 2025 All rights reserverd. </p>
                
                
            </div>

        </div>
    )
}

export default Footer
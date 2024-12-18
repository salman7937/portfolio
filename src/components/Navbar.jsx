import React from 'react'
import image from "../assets/image.png"
import download from "../assets/download.png"
import Menus from './Menus'
import MobileMenu from './MobileMenu'
function Navbar() {
    return (
        <div className='flex justify-between items-center mx-8 my-6'>
            <div className='flex items-center  gap-3' >
                <img src={image} alt="" />
                <h5 className='text-xl font-bold tracking-[-2%] '>personel</h5>
            </div>
            <div className="md:block hidden"  >
                <Menus />
            </div>
            <div className="md:hidden block"  >
                <MobileMenu />
            </div>
            <div className='bg-black md:block hidden'>
                <button className='font-semibold flex items-center justify-center py-4 px-5 rounded gap-2'>
                    <span className='text-white'>Resume</span>
                    <img src={download} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Navbar

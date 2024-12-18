import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { navMenu } from '../utils/Data'


function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const sideRef = useRef()
    const handleHamBurger = () => {
        setIsOpen(true)

    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleClickOutside = (e) => {


        if (sideRef.current && !sideRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside)

        return () => {
            window.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])



    return (
        <div className='overflow-hidden '>
            <GiHamburgerMenu onClick={handleHamBurger} />
            {isOpen && <div ref={sideRef} className='bg-black text-white min-h-screen fixed top-0 right-0 px-6 pt-12 z-50 transition-all duration-500  '>
                <RxCross2 className='relative bottom-10 right-4' onClick={handleClose} />
                <ul className='flex flex-col gap-4 font-semibold text-base tracking-[-2%]'>
                    {navMenu.map((menu) => {
                        return (
                            <li key={menu.id}><a href={menu.url}>{menu.name}</a></li>
                        )
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default MobileMenu
import React from 'react'
import { navMenu } from '../utils/Data'

function Menus() {
    return (
        <>
            <div>
                <ul className='flex gap-8 font-semibold text-xl tracking-[-2%]'>
                    {navMenu.map((menu) => {
                        return (
                            <li key={menu.id}><a href={menu.url}>{menu.name}</a></li>
                        )
                    })
                    }


                </ul>
            </div>
        </>
    )
}

export default Menus

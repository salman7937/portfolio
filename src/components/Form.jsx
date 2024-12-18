import React from 'react'
import SocialBtn from './SocialBtn'

function Form() {
    return (
        <div >

            <div className=' gap-5 flex flex-col rounded-[4px]  max-w-[500px]   '>
                <input className='border border-black  py-4 px-6 rounded-[4px]' type="text" placeholder='your name  ' />
                <input className='border border-black  py-4 px-6 rounded-[4px]' type="text" placeholder='Email  ' />
                <input className='border border-black  py-4 px-6 rounded-[4px]' type="text" placeholder='your website(if exist) ' />
               <textarea  className="border border-black py-4 px-6 rounded-[4px]" name="comment" id="comment" cols={10} rows={4} placeholder='How can i help you'></textarea>
                <div className='flex flex-wrap h-14 items-center justify-between gap-6' >
                   <h2 className='font-semibold text-xl tracking-[2%] bg-black text-white py-4 px-4 text-center rounded'>Get in Touch</h2>
                    <SocialBtn/>
                </div>
            </div>
            
        </div>
    )
}

export default Form


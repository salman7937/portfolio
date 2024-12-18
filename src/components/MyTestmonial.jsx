import React from 'react'
import image10 from "../assets/image10.png"
import image7 from "../assets/image7.png"
import image8 from "../assets/image8.png"
import { testmonail } from '../utils/Data'
function MyTestmonial() {
    return (
        <div className=' my-[60px] flex  flex-col  items-center  gap-6 mx-5 md:mx-0'>
            <h1 className=' md:text-5xl text-[28px] tracking-[-2%] flex items-center justify-center gap-4'>MY<span className='font-extrabold'>Testmonail</span></h1>
            <div className=' flex  md:flex-row md:justify-center  flex-col max-w-[1216px] gap-6'>
                
              {
                testmonail.map((test)=>{
return(
    <div  key={test.id} className='max-w-[370px] flex flex-col items-center gap-5 rounded-[20px]  p-10 shadow-2xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>
                    <img src={test.imgUrl} width={96} alt="image6" />
                    <p className='text-base tracking-[2%]'>{test.desc}</p>
                    <img src={image7} width={120} alt="" />
                    <h5 className='font-semibold text-xl tracking-[-2%]'>{test.name}</h5>
                    <h6 className='text-base font-semibold tracking-[-2%] text-[#71717A]'>Designer</h6>

                </div>
)
            })}

            </div>


        </div>





    )
}

export default MyTestmonial
import React from 'react'
import image2 from "../assets/image2.png"
function AboutMe() {
    return (
        <div  className='flex items-start justify-between max-w-[1280px] p-8 my-[60px] flex-col md:flex-row ' >
            <div>
                <img src={image2}  width={525} alt="image2" />
            </div>
            <div className="  max-w-[610px] space-y-5" >
                <h4 className=' md:text-5xl tracking-[-2%] py-5 flex gap-4 text-[28px] '> About<span className='font-extrabold'>ME</span></h4>
              <div className='space-y-5 text-[#71717A]'>
              <p >
                I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to 
                </p>
                <p>
                I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p>
                When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe

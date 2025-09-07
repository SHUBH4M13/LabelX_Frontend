import React from 'react'
import AnimateBlurText from "../Components/AnimateBlurText"

export default function HeroSection() {
  return (
    <div className=' flex flex-col'>

      <div className='w-full flex flex-col justify-center items-center '>
        <div className='flex justify-center items-center '>
          <AnimateBlurText text={"Scan. Analyze. Eat Safe."} textsize={"6xl"} />
        </div>

        <div
          className='py-5'>
          <p className='text-xl text-center px-10 sm:px-40 animate-fade-in-bottom delay-1000'>
            Consumers struggle with complex, multilingual labels and inconsistent regulations. LabelX scans, analyzes ingredients, and delivers real‑time health and compliance insights across regions.
          </p>
        </div>
      </div>

      <div className=' flex justify-center items-center gap-5 sm:gap-20 animate-fade-in-bottom delay-1000'>
        <div>
          <button className=' bg-black w-[150px] h-[50px] text-white rounded-4xl cursor-pointer hover:bg-black/90 duration-200'>Start Scanning</button>
        </div>
        <div>
          <button className=' bg-black w-[150px] h-[50px] text-white rounded-4xl cursor-pointer hover:bg-black/90 duration-200'>Learn More</button>
        </div>
      </div>

    </div>
  )
}

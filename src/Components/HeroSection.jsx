import React from 'react'
import AnimateBlurText from "../Components/AnimateBlurText"
import Grocery from "../assets/Grocery.png"

export default function HeroSection() {
  return (

    <div className='flex flex-col-reverse sm:flex-row justify-center items-center px-10'>
      
      <div className=' flex flex-col'>

        <div className='w-full flex flex-col justify-center items-start '>

          <div className='flex py-5 px-9 justify-center items-center sm:items-start '>
            <AnimateBlurText text={"Scan. Analyze. Eat Safe."} textsize={"6xl"} />
          </div>

          <div
            className='py-5'>
            <p className='text-xl sm:text-left text-center px-10 animate-fade-in-bottom delay-1000'>
              Consumers struggle with complex, multilingual labels and inconsistent regulations. LabelX scans, analyzes ingredients, and delivers real‑time health and compliance insights across regions.
            </p>
          </div>

        </div>

        <div className=' px-10 flex justify-start items-start gap-5 sm:gap-20 animate-fade-in-bottom'>
          <div>
            <button className=' bg-black w-[150px] h-[50px] text-white rounded-4xl cursor-pointer hover:bg-black/90 duration-200'>Start Scanning</button>
          </div>
          <div>
            <button className=' bg-black w-[150px] h-[50px] text-white rounded-4xl cursor-pointer hover:bg-black/90 duration-200'>Learn More</button>
          </div>
        </div>

      </div>

      <div className=' flex justify-center items-center animate-fade-in-right'>
        <img
        className='w-[370px] sm:w-full rounded-[150px]'
        src={Grocery}></img>
      </div>

    </div>

  )
}

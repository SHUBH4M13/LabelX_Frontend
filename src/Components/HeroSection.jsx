import React from 'react'
import AnimateBlurText from "../Components/AnimateBlurText"
import Grocery from "../assets/Grocery.png"
import CusButton from './CusButton'
import Tag from './Tag'

export default function HeroSection() {
  return (

    <div className='flex flex-col-reverse sm:flex-row justify-center items-center px-10'>

      <div className='flex flex-col'>

        <div className='w-full px-10 gap-10 flex flex-col justify-center items-start'>

          <div className='flex justify-center items-center sm:items-start '>
            <AnimateBlurText text={"Scan. Analyze. Eat Safe."} textsize={"6xl"} />
          </div>

          <div>
            <p className='text-xl sm:text-left text-center animate-fade-in-bottom delay-1000'>
              Consumers struggle with complex, multilingual labels and inconsistent regulations. LabelX scans, analyzes ingredients, and delivers real‑time health and compliance insights across regions.
            </p>
          </div>

          <div className='flex justify-start items-start gap-5 sm:gap-10 animate-fade-in-bottom'>
            <div>
              <CusButton text={"Try for Free"} />
            </div>
            <div>
              <CusButton
                text={"Learn More"}
                mode={"white"}
              />
            </div>
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

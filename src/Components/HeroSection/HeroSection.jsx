import React from 'react'
import LeftText from './LeftText'
import Grocery from "../../assets/Grocery.png"

export default function HeroSection() {
  return (
    <div className='flex flex-col-reverse justify-center gap-15 md:gap-25 items-center lg:flex-row sm:items-center  min-h-screen px-15 sm:px-32 '>

      <div>
        <LeftText />
      </div>

      <div className=' flex justify-center items-center '>
          <img 
          className=' md:w-[350px] lg:w-[450px] rounded-4xl '
          src={Grocery} alt="image" />
      </div>

    </div>
  )
}

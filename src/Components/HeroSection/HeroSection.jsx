import React from 'react'
import LeftText from './LeftText'
import Grocery from "../../assets/Grocery.png"

export default function HeroSection() {
  return (
    <div className='flex flex-col-reverse justify-evenly sm:flex-row sm:justify-between sm:items-center  min-h-screen px-15 sm:px-32 '>

      <div className=''>
        <LeftText />
      </div>

      <div>
          <img 
          className='  w-[450px] rounded-4xl '
          src={Grocery} alt="image" />
      </div>

    </div>
  )
}

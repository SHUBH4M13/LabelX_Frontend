import React from 'react'
import LeftText from './LeftText'
import Grocery from "../../assets/Grocery.png"

export default function HeroSection() {
  return (
    <div className=' flex justify-between min-h-screen px-32 items-center bg-[linear-gradient(162deg,rgba(0, 153, 102, 0.8) 0%, rgba(255, 255, 255, 0) 50%)]'>

      <div className=' animate-fade-in-left'>
        <LeftText />
      </div>

      <div className=' animate-fade-in-right'>
          <img 
          className=' w-[450px] rounded-4xl '
          src={Grocery} alt="image" />
      </div>

    </div>
  )
}

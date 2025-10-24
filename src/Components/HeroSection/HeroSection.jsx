import React, { useEffect, useRef } from 'react'
import LeftText from './LeftText'
import Grocery from "../../assets/Grocery.png"
import gsap from 'gsap'

export default function HeroSection() {

  const imageref = useRef(null)

  useEffect( () => {
    gsap.fromTo(imageref.current , { x: 250 , opacity: 0 }, { x: 0 , opacity: 1, duration: 2.5 , ease:"power2.out"}) 
  }, [])

  return (
    <div className='flex flex-col-reverse justify-center gap-15 md:gap-25 items-center lg:flex-row sm:items-center  min-h-screen px-15 sm:px-32 '>

      <div>
        <LeftText />
      </div>

      <div className=' overflow-x-hidden flex justify-center items-center '>
          <img 
          ref={imageref}
          className=' md:w-[350px] lg:w-[450px] rounded-4xl '
          src={Grocery} alt="image" />
      </div>

    </div>
  )
}

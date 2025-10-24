import React, { useEffect, useRef } from 'react'
import CusButton from '../CusButton'
import TransparentButton from "../TransparentButton"
import { gsap } from 'gsap'

export default function LeftText() {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const texts = gsap.utils.toArray(containerRef.current.querySelectorAll('.anim-text'))

  //   const tl = gsap.timeline();

  //   tl.fromTo(texts, {
  //     x: -200,
  //     opacity: 0,
  //   } , {
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,
  //     stagger: 0.5,
  //     ease: "power2.out"
  //   }) 

  //   tl.fromTo('.herodesc' ,{
  //       y: 25,
  //       opacity: 0,
  //     } , {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       ease: "power1.out"
  //     } )
  // }, []);

  return (
    <div ref={containerRef} className='w-full md:w-[550px] flex flex-col gap-10'>
      <div className='text-center lg:text-left text-[36px] md:text-[46px] lg:text-[64px] font-bold'>
        <div>
          <span className='anim-text'>Scan.</span>
          <span className='anim-text'> Decode.</span>
        </div>
        <div className='md:mt-[-14px]'>
          <span className='anim-text text-primary'>Eat.</span>
          <span className='anim-text text-primary'> Safe.</span>
        </div>
      </div>

      <div className='text-[20px] text-textblue text-center lg:text-left font-light'>
        <p className='herodesc'>
          AI-powered food label scanning that instantly identifies harmful ingredients, allergens, and safety warnings in any packaged food.
        </p>
      </div>

      <div className='flex gap-6 lg:gap-10 items-center justify-center lg:justify-start'>
        <CusButton text={"Try Now"} />
        <TransparentButton text={"How it works?"} />
      </div>
    </div>
  );
}

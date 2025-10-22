import React from 'react'
import CusButton from '../CusButton'
import TransparentButton from "../TransparentButton"

export default function LeftText() {
    return (
        <div className='w-full md:w-[550px] flex flex-col gap-10 '>

            <div className='text-center lg:text-left text-[36px] md:text-[46px] lg:text-[64px] font-bold'>
                <div className=''>
                    <span>Scan.</span>
                    <span> Decode.</span>
                </div>
                <div className=' md:mt-[-14px]'>
                    <span className='text-primary'>Eat.</span>
                    <span className='text-primary'> Safe.</span>
                </div>
            </div>

            <div className='text-[20px] text-textblue text-center lg:text-left font-light'>
                <p>AI-powered food label scanning that instantly identifies harmful ingredients, allergens, and safety warnings in any packaged food.</p>
            </div>

             <div className='flex gap-6 lg:gap-10 items-center justify-center lg:justify-start '>

                <div>
                    <CusButton 
                    text={"Try Now"}/>
                </div>

                <div>
                    <TransparentButton 
                    text={"How it works?"}
                    />
                </div>

            </div>
        </div>
    )
}

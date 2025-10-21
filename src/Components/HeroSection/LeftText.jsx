import React from 'react'
import CusButton from '../CusButton'
import TransparentButton from "../TransparentButton"

export default function LeftText() {
    return (
        <div className='md:w-[550px] flex flex-col gap-7'>

            <div className='text-center sm:text-left text-[46px] sm:text-[64px] font-bold flex flex-col '>
                <div>
                    <span>Scan.</span>
                    <span>Decode.</span>
                </div>
                <div>
                    <span className=' text-primary'> Eat.</span>
                    <span className=' text-primary'> Safe.</span>
                </div>
            </div>

            <div className='text-[20px] text-textblue text-center sm:text-left font-light'>
                <p>AI-powered food label scanning that instantly identifies harmful ingredients, allergens, and safety warnings in any packaged food.</p>
            </div>

             <div className='flex gap-6 sm:gap-10 items-center justify-center sm:justify-start '>

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

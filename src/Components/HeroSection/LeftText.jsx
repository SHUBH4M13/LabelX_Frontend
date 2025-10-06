import React from 'react'
import CusButton from '../CusButton'
import TransparentButton from "../TransparentButton"

export default function LeftText() {
    return (
        <div className='md:w-[550px] flex flex-col gap-7 font-inter '>
            <div className='text-[64px] font-bold '>
                <span>Scan. Decode.</span>
                <span className=' text-primary'> Eat. Safe.</span>
            </div>

            <div className='text-[20px] text-textblue text-left font-light'>
                <p>AI-powered food label scanning that instantly identifies harmful ingredients, allergens, and safety warnings in any packaged food.</p>
            </div>

            <div className='flex gap-10 justify-start '>

                <div>
                    <CusButton 
                    text={"Try Now - Scan Label"}/>
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

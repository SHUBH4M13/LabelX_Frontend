import React from 'react'
import AnimatedBorderCard from './AnimatedBorderCard'
import CusButton from './CusButton'

export default function ScanSection() {
    return (
        <div className=' flex flex-col gap-15 justify-center items-center '>

            <div className=' flex '>
                <AnimatedBorderCard />

                

            </div>

            <CusButton text={"Scan now"} />

        </div>
    )
}

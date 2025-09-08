import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import WhyLabelXSection from "../Components/WhyLabelXSection"

export default function Home() {
    return (
        <div  className=' flex flex-col items-center justify-center' >
            <div className=' w-full '>
                <Navbar />
            </div>

            <div className=' flex justify-center h-[90vh] '>
                <HeroSection />
            </div>

            <div>
                <WhyLabelXSection/>
            </div>
            
        </div>
    )
}

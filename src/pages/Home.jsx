import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import Navbar from '../Components/Navbar'
import Tag from "../Components/Tag"
import WhyLabelXSection from "../Components/WhyLabelXSection"
import ScanSection from "../Components/ScanSection"
import Carasouel from '../Components/Carasouel/Carasouel'
import HowItWorksMain from "../Components/HowItWorks/HowItWorksMain"

export default function Home() {
    return (
        <div className=' font-inter flex flex-col' >
            <div>
                <Navbar />
            </div>

             <div>
                <HeroSection />
            </div>

            <div className='w-full  bg-lightbg'>
                <WhyLabelXSection />
            </div>

            {/*  <div>
                <HowItWorksMain />
            </div>
            
            <div>
                <Carasouel />
            </div>

            <div className=' flex flex-col gap-10 py-10 justify-center items-center w-full bg-lightbg '>
                <Tag text={"Try Scanning"} />
                <ScanSection />
            </div> */}

        </div>
    )
}

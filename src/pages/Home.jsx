import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import WhyLabelXSection from "../Components/WhyLabelXSection"
import Tag from '../Components/Tag'
import ScanSection from "../Components/ScanSection"

export default function Home() {
    return (
        <div className=' flex flex-col items-center justify-center' >
            <div className=' w-full '>
                <Navbar />
            </div>

            <div className=' bg-lightbg flex justify-center h-[90vh] '>
                <HeroSection />
            </div>

            <div className=' w-full  bg-lightbg'>
                <WhyLabelXSection />
            </div>

            <div className=' flex flex-col gap-10 py-10 justify-center items-center w-full bg-lightbg '>
                <Tag text={"Try Scanning"} />
                <ScanSection />
            </div>

        </div>
    )
}

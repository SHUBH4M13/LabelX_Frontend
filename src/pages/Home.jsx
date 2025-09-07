import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className=' flex justify-center py-15 sm:py-35 h-[90vh] bg-[radial-gradient(circle,rgba(236,254,255,1)_50%,rgba(255,255,255,1)_0%,rgba(236,254,255,1)_50%)]'>
                <HeroSection />
            </div>
        </div>
    )
}

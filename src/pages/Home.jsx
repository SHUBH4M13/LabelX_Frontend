import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className=' flex justify-center py-15 h-[90vh] '>
                <HeroSection />
            </div>
        </div>
    )
}

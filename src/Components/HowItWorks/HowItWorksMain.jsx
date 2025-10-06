import React from 'react'
import Accordian from "./Accordian"
import Confusion from "../../assets/Confusion.png"

const items = [
    {
        title: "Step 1: Upload Product Label",
        description: "Users upload an image of their packaged food label directly through the web app.",
    },
    {
        title: "Step 2: OCR & Ingredient Extraction",
        description: "The system uses Optical Character Recognition (OCR) to read ingredient text from the image.",
    },
    {
        title: "Step 3: Ingredient Analysis",
        description: "AI compares extracted ingredients with global food safety databases and identifies harmful, banned, or allergenic substances.",
    },
    {
        title: "Step 4: Personalized Insights",
        description: "Based on the user’s medical profile (like allergies or diseases), the AI tailors warnings and suggestions.",
    },
    {
        title: "Step 5: Instant Report Generation",
        description: "The user gets an easy-to-read safety summary and compliance status of the product.",
    }
]

export default function HowItWorksMain() {
    return (
        <div className=' p-10 flex flex-col gap-10  justify-center items-center mt-10 border-black/10 '>

            <div>
                <p className=' font-bold text-5xl '>How LabelX Works</p>
            </div>

            <div className='flex justify-around items-center gap-5 '>

                <div className=' w-1/2'>
                    <img 
                    className=' w-[700px]'
                    src={Confusion} alt="" />
                </div>

                <div className=' w-1/2 overflow-hidden' >
                    <Accordian items={items} />
                </div>

            </div>

        </div>
    )
}

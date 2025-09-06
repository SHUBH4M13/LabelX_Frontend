import React from 'react'
import { motion } from "motion/react"

export default function AnimateBlurText() {
    const content = "LabelX"
    const letters = content.split("")

    return (
        <div>
            {letters.map((letter, idx) =>
                <motion.p
                    initial={{ filter: "blur(5px)", opacity: 0, y: 12 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    key={idx}
                    className='text-6xl inline-block font-semibold text-gray-800'>
                    {letter === " " ? "\u00A0" : letter}
                </motion.p>
            )}
        </div>
    )
}

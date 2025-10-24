import React from 'react'

export default function AnimateBlurText({text , textsize}) {
    const content = text
    const letters = content.split("")

    return (
        <div>
            {letters.map((letter, idx) =>
                <p
                className={`text-3xl sm:text-6xl inline-block font-semibold text-textcolor`}>
                    {letter === " " ? "\u00A0" : letter}
                </p>
            )}
        </div>
    )
}
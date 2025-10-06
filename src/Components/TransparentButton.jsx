import React from 'react'

export default function TransparentButton({onClick , text }) {
  return (
    <div className=' '>
        <button
        className={`px-8 py-4 rounded-xl  border-2 border-gray-400 text-gray-700 font-semibold hover:border-primary transition-colors duration-300 cursor-pointer `}
        onClick={onClick}
        >
            {text}
        </button>
    </div>
  )
}

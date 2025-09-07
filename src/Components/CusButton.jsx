import React from 'react'

export default function CusButton({text , onclick }) {
  return (
    <button 
    onClick={onclick}
    className='bg-black w-[100px] h-[40px] sm:w-[150px] sm:h-[50px] text-white rounded-4xl cursor-pointer hover:bg-black/90 duration-200'>{text}</button>
  )
}

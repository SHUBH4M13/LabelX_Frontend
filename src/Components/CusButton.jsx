import React from 'react'

export default function CusButton({ text, onClick}) {


  return (
    <button
      onClick={onClick}
      className= {`shadow-sm font-inter bg-emerald-600 hover:bg-hoverColor px-8 py-4  text-[16px] text-white shadow-black/50 p-[16px] font-medium rounded-xl cursor-pointer duration-300`}>
      {text}
    </button>
  )
}
import React from 'react'

export default function CusButton({text, onclick, mode = "dark"}) {

  let bgcolor = "primary"
  let textcolor = "white"
  let hovercolor = "primary/90"

  
  if (mode === "white") {
    bgcolor = "white"
    textcolor = "black"
    hovercolor = "#e8e8e8"
  }

  return (
    <button
      onClick={onclick}
      className={`bg-${bgcolor} text-${textcolor} hover:bg-${hovercolor} shadow-sm shadow-black/50 shadow- w-[100px] h-[40px] sm:w-[150px] sm:h-[45px] rounded-4xl cursor-pointer hover:translate-y-[-2px] duration-250`
      }> {text}</button >
  )
}
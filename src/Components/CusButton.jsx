import React from 'react'

export default function CusButton({ text, onClick, mode = "dark" }) {

  let bgcolor = "primary"
  let textcolor = "white"
  let hovercolor = "primary/90"

  let classes = `shadow-sm shadow-black/50 w-[100px] h-[40px] sm:w-[150px] sm:h-[45px] rounded-4xl cursor-pointer hover:translate-y-[-2px] duration-250`


  if (mode === "white") {
    classes = `${classes} bg-white text-black hover:bg-#e8e8e8`
  } else {
    classes = `${classes} bg-primary text-white hover:bg-primary/90`
  }

  return (
    <button
      onClick={onClick}
      className={classes}>
      {text}
    </button >
  )
}
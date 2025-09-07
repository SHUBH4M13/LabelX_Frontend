import React from 'react'
import { ScanLine } from "lucide-react"
import CusButton from './CusButton'

export default function Navbar() {
  return (
    <div className=' h-[10vh]  bg-white/50 sm:px-20 px-10 flex items-center justify-between border-b border-black/10 shadow-md shadow-black'>
        <div className=' flex items-center justify-center gap-2 sm:gap-3 '>
            <ScanLine 
            strokeWidth = {3}
            size={30}/>
            <h1 className=' mt-1 font-bold text-2xl sm:text-3xl text-center'>LabelX</h1>
        </div>

        <div>
            <CusButton text={"Sign In"} />
        </div>
    </div>
  )
}

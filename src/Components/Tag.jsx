import React from 'react'
import {Check} from "lucide-react"

export default function Tag({text , isTick = false}) {
  return (
    <div className='flex gap-3 items-center justify-center bg-secondary text-secondaryFore/90 shadow-sm shadow-black/30 rounded-4xl px-4 py-1.5'>
        { isTick && 
            <Check color="#582d1d" size={18} />
        }
        <p className='text-sm '>{text}</p>
    </div>
  )
}

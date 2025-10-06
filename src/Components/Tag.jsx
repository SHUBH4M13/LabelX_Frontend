import React from 'react'
import {Check} from "lucide-react"

export default function Tag({text}) {
  return (
    <div className='flex gap-3 items-center justify-center bg-primary text-white font-medium shadow-sm shadow-black/30 rounded-4xl px-4 py-3'>
        <p className='text-sm '>{text}</p>
    </div>
  )
}

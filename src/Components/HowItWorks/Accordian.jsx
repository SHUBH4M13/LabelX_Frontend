import React, { useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

export default function DropDown({ items }) {

  const [OpenIndex, setOpenIndex] = useState(null);

  function handleToggle(index){
    if(OpenIndex === index){
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div>
      {items.map((item, index) => {

        return <div

          className=' font-medium text-left max-h-[500px] overflow-y-auto font-inter'
          key={index}>

          <div className=' w-full h-[1px] bg-black/10 '> </div>

          <button
            onClick={() => {
              handleToggle(index)
            }}
            className=' px-4 py-6 flex'>
            {item.title}

          </button>

          
          {OpenIndex === index && <div className='py-6 max-w-[350px] text-gray-700 font-normal'>
            {item.description}
          </div>}

        </div>
      })}

      <div className=' w-full h-[1px] bg-black/10'> </div>
    </div>
  )
}

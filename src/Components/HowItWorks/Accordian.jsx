import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

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

          className='font-medium text-left max-h-[410px] transition-transform duration-500 overflow-y-auto font-inter border-b-1 border-black/10 '
          key={index}>

          <button
            onClick={() => {
              handleToggle(index)
            }}
            className='w-full lg:px-4 py-6 flex items-center justify-between'>
            
            <span>{item.title}</span>

            {OpenIndex === index ? (
              <ChevronUp className="w-5 h-5 text-primary transition-transform duration-500 rotate-y-180" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-500 rotate-y-0" />
            )}

          </button>

          
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              OpenIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 pb-4 text-gray-700 text-[14px] leading-relaxed">
              {item.description}
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

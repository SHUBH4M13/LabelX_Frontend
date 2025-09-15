import React from 'react'

export default function OutputMessageBox({msg}) {
    return (
        <div className='w-[300px] h-[300px] flex justify-center items-center bg-white border-dashed border-2 border-gray-300 rounded-2xl'>
            <p className=' p-5 text-lg'>{msg}</p>
        </div>
    )
}

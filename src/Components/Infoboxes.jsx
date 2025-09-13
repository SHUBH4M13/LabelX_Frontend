import React from 'react'


export default function Infoboxes({fact}) {
    return (
        <div>
            <div className="bg-#ffffff rounded-2xl hover:translate-y-[-2.5px] duration-300 shadow-lg shadow-black/25 border-1 border-black/20  p-3 flex flex-col items-center">
                <div className=' p-3 bg-secondaryFore rounded-full'>
                    {fact.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-textcolor mt-4">
                    {fact.stat}
                </h3>
                <p className="text-textcolor mt-2">{fact.desc}</p>
                <a
                    href={`https://${fact.source}`}
                    target="_blank"
                    rel=""
                    className="text-xs text-textcolor mt-3 underline"
                >
                    {fact.source}
                </a>
            </div>
        </div>
    )
}

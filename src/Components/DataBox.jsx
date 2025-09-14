import React from 'react'

export default function DataBox({fact}) {
    return (
        <div>
            <a 
                href={fact.source}
                className="bg-white flex justify-center items-center w-[400px] h-[230px] cursor-pointer rounded-2xl hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300 ease-out shadow-lg shadow-black/20 border border-black/10 px-6 py-8 flex-col group"
            >
                <div className="p-4 bg-secondaryFore rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 ease-out shadow-md">
                    {fact.icon}
                </div>
                
                <h3 className="text-3xl text-center font-black text-textcolor mb-3 leading-tight">
                    {fact.stat}
                </h3>
                
                <p className="text-center text-textcolor/80 text-sm leading-relaxed max-w-[320px]">
                    {fact.desc}
                </p>
                
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-textcolor/30 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
        </div>
    )
}
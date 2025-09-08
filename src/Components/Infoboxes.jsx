import React from 'react'
import { AlertTriangle, BarChart, Search } from "lucide-react";


export default function Infoboxes({fact}) {
    return (
            <div>
                    <div
                        className="bg-black rounded-2xl shadow-lg p-3 flex flex-col items-center"
                    >
                        {fact.icon }
                        <h3 className="text-2xl font-extrabold text-white mt-4">
                            {fact.stat}
                        </h3>
                        <p className="text-white mt-2">{fact.desc}</p>
                        <a
                            href={`https://${fact.source}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white mt-3 underline"
                        >
                            {fact.source}
                        </a>
                    </div>
            </div>
    )
}

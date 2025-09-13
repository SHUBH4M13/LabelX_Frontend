import React from 'react'
import Infoboxes from "./Infoboxes"
import { AlertTriangle, BarChart, Search } from "lucide-react";

export default function WhyLabelXSection() {

    const data = [
        {
            icon: <BarChart className=" text-secondary" />,
            stat: "83%",
            desc: "of consumers are confused by food ingredient labels",
            source: "fooddive.com",
        },
        {
            icon: <Search className=" text-secondary" />,
            stat: "60%",
            desc: "struggle to understand nutrition labels worldwide",
            source: "vendingmarketwatch.com",
        },
        {
            icon: <AlertTriangle className=" text-secondary" />,
            stat: "29%",
            desc: "list chemicals in food as their top food safety concern",
            source: "chemical-free-life.org",
        },
    ]

    return (
        <div className='bg-lightbg w-full px-10 mb-64 flex flex-col justify-center items-center gap-15'>

            <div>
                <p className=' font-bold text-6xl '>Why LabelX ? </p>
            </div>

                <div className='flex justify-center items-center gap-10 '>
                    {data.map((info, idx) => (
                        <div key={idx}>
                            <Infoboxes fact={info} />
                        </div>
                    ))}
                </div>

        </div>
    )
}

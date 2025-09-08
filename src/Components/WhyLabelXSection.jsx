import React from 'react'
import Scanning from "../assets/Scanning.png"
import Infoboxes from "./Infoboxes"
import { AlertTriangle, BarChart, Search } from "lucide-react";

export default function WhyLabelXSection() {

    const data = [
        {
            icon: <BarChart className="w-10 h-10 text-white" />,
            stat: "83%",
            desc: "of consumers are confused by food ingredient labels",
            source: "fooddive.com",
        },
        {
            icon: <Search className="w-10 h-10 text-white" />,
            stat: "60%",
            desc: "struggle to understand nutrition labels worldwide",
            source: "vendingmarketwatch.com",
        },
        {
            icon: <AlertTriangle className="w-10 h-10 text-white" />,
            stat: "29%",
            desc: "list chemicals in food as their top food safety concern",
            source: "chemical-free-life.org",
        },
        {
            icon: <AlertTriangle className="w-10 h-10 text-white" />,
            stat: "29%",
            desc: "list chemicals in food as their top food safety concern",
            source: "chemical-free-life.org",
        },
    ]

    return (
        <div className='px-10 flex flex-col justify-center items-center gap-15  bg-white w-full'>

            <div>
                <p className=' font-bold text-5xl '>Why LabelX ? </p>
            </div>

            <div className='flex justify-around items-center gap-10 '>

                <div>
                    <img
                        className='w-[400px] rounded-4xl '
                        src={Scanning} alt="" />
                </div>

                <div className='grid grid-cols-2 gap-5 justify-center '>
                    {data.map((info, idx) => (
                        <div key={idx}>
                            <Infoboxes fact={info} />
                        </div>
                    ))}
                </div>


            </div>


        </div>
    )
}

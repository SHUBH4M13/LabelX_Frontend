import React from 'react'
import DataBox from './DataBox';
import { AlertTriangle, BarChart, Search } from "lucide-react";

export default function WhyLabelXSection() {

    const data = [
        {
            icon: <BarChart className=" text-secondary" />,
            stat: "83%",
            desc: "of consumers are confused by food ingredient labels",
            source: "https://www.fooddive.com/news/survey-a-majority-of-consumers-are-confused-by-food-ingredients/445922/",
        },
        {
            icon: <Search className=" text-secondary" />,
            stat: "40%",
            desc: "of consumers check allergen information before purchase",
            source: "https://vendingmarketwatch.com",
        },
        {
            icon: <AlertTriangle className=" text-secondary" />,
            stat: "33%",
            desc: "of Indian consumers check ingredient information on food labels.",
            source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11108719/",
        },
    ]

    return (
        <div className='bg-lightbg w-full px-12 py-12 flex flex-col justify-center items-center gap-15 '>

            <div>
                <p className='font-bold text-[40px] sm:text-6xl'>Did You Know?</p>
            </div>

                <div
                    className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                    {data.map((info, idx) => (
                        <div key={idx}>
                            <DataBox fact={info} />
                        </div>
                    ))}
            </div>

        </div>
    )
}

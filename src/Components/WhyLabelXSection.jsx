import React from 'react'
import DataBox from './DataBox';
import { AlertTriangle, BarChart, Search } from "lucide-react";
import { motion } from 'motion/react'

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
        <div className='bg-lightbg w-full px-16 flex flex-col justify-center items-center gap-15 '>

            <motion.div
                initial={{ filter: "blur(2px)", opacity: 0, y: 100 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <p className='font-bold text-[40px] sm:text-6xl'>Did You Know?</p>
            </motion.div>

            <motion.div
                initial={{ filter: "blur(2px)", opacity: 0, y: 100 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row justify-center items-center gap-10 '>
                {data.map((info, idx) => (
                    <div key={idx}>
                        <DataBox fact={info} />
                    </div>
                ))}
            </motion.div>

        </div>
    )
}

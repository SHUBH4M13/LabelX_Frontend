import React from 'react'
import { useState } from 'react'
import AnimatedBorderCard from './AnimatedBorderCard'
import CusButton from './CusButton'
import Output from "../Components/Output"
import OutputMessageBox from './OutputMessageBox'

export default function ScanSection() {

    const [Product, setProduct] = useState(null);
    const [isClicked, setisClicked] = useState(false);

    const gems = [
        {
            msg: "This product contains several artificial food colors linked to allergies, hyperactivity, and possible long-term health risks. Some of these are banned or restricted in the EU, USA, and other countries.",
            data: [
                { Ingredient: "Colour 171 (Titanium Dioxide)", SideEffects: "Possible DNA damage, nanoparticle accumulation, inflammation risks", BannedIn: "European Union (since 2022)" },
                { Ingredient: "Colour 102 (Tartrazine)", SideEffects: "Allergic reactions, hyperactivity in children, sensitivity in asthmatics", BannedIn: "Restricted in Norway, Austria, Finland; warning labels in EU/UK" },
                { Ingredient: "Colour 133 (Brilliant Blue FCF)", SideEffects: "Generally considered safe, but may cause mild allergic reactions in sensitive individuals", BannedIn: "Banned in some countries like Belgium, France, Germany (historically)" },
                { Ingredient: "Colour 124 (Ponceau 4R)", SideEffects: "Hyperactivity in children, allergic reactions (especially in aspirin-sensitive people)", BannedIn: "Not approved in USA; restricted in Norway and Finland" },
                { Ingredient: "Colour 127 (Erythrosine)", SideEffects: "Possible link to thyroid tumors in high doses (animal studies), hyperactivity concerns", BannedIn: "Banned in Norway; restricted in USA (only in cherries/candies)" },
                { Ingredient: "Colour 122 (Carmoisine)", SideEffects: "Hyperactivity in children, allergic reactions in sensitive individuals", BannedIn: "Banned in USA, Norway; allowed in EU with restrictions" },
                { Ingredient: "Colour 132 (Indigotine / Indigo Carmine)", SideEffects: "May cause nausea, hypertension, allergic reactions in rare cases", BannedIn: "Restricted in some countries; approved in EU/USA with limits" },
                { Ingredient: "Colour 110 (Sunset Yellow FCF)", SideEffects: "Hyperactivity in children, allergic reactions (especially in aspirin-sensitive people)", BannedIn: "Banned in Norway and Finland; requires warning labels in EU/UK" }
            ]
        },
    ]

    return (
        <div className=' flex flex-col gap-15 justify-center items-center '>

            <div className=' flex flex-col gap-15 justify-center items-center '>

                <div className=' flex gap-15'>
                    <div>
                        <AnimatedBorderCard />
                    </div>

                    {isClicked &&
                        <div>
                            <OutputMessageBox msg={gems[0].msg}/>
                        </div>
                    }

                </div>

                {isClicked &&
                    <div>
                        <Output tableData={gems[0].data} />
                    </div>
                }

            </div>

            <CusButton
                onClick={() => { setisClicked(!isClicked) }}
                text={"Scan now"} />

        </div>
    )
}

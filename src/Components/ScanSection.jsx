import React, { useState } from 'react'
import AnimatedBorderCard from './AnimatedBorderCard'
import CusButton from './CusButton'
import axios from 'axios'
import ScanResults from './Result/ScanResults'

export default function ScanSection() {

    const [selectedFile, setselectedFile] = useState(null)
    const [Data, setData] = useState(null)

    async function HandleSubmit() {

        if (!selectedFile) {
            alert("Please select an image")
            return;
        }

        const formdata = new FormData();
        formdata.append("image", selectedFile);

        try {
            const url = import.meta.env.VITE_BACKEND_URL + '/upload'
            const token = localStorage.getItem(`token`)
            const res = await axios.post(url, formdata , {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }) 

            console.log(res.data.AIresponse);
            // Store the response data in state
            setData({
                AIresponse: res.data.AIresponse,
                ingredientInfo: res.data.ingredientInfo
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=' flex flex-col gap-15 justify-center items-center '>

            <div className=' flex flex-col gap-15 justify-center items-center '>

                <div className=' flex gap-15'>
                    <div>
                        <AnimatedBorderCard setselectedFile={setselectedFile} />
                    </div>

                </div>

            </div>

            <CusButton
                onClick={HandleSubmit}
                text={"Scan now"} />


            {
                Data !== null && <ScanResults AIresponse={Data.AIresponse} ingredientInfo={Data.ingredientInfo} />
            }  

        </div>
    )
}
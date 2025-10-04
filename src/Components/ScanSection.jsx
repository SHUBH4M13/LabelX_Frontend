import React, { useState } from 'react'
import AnimatedBorderCard from './AnimatedBorderCard'
import CusButton from './CusButton'
import axios from 'axios'

export default function ScanSection() {

    const [selectedFile, setselectedFile] = useState(null)

    async function HandleSubmit() {


        if (!selectedFile) {
            alert("Please select an image")
            return;
        }

        const formdata = new FormData();
        formdata.append("image", selectedFile);

        try {
            const url = import.meta.env.VITE_BACKEND_URL + '/upload'
            const res = await axios.post(url, formdata) //send token too after testing

            console.log(res.data.ocrText);


            alert("Image uploaded successfully");
        } catch (error) {
            console.error(error);
            alert("Upload failed");
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

        </div>
    )
}

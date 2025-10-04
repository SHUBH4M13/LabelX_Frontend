import React from 'react'
import Signup from "../Components/Signup"
import Confusion from "../assets/Confusion.png"

export default function FormPage() {
    return (
        <div className=' flex flex-row-reverse gap-20 justify-center items-center bg-lightbg w-full min-h-screen'>


            <div>
                <Signup />
            </div>

            <div>
                <img
                    className=' w-[650px] '
                    src={Confusion} alt="" />
            </div>

        </div>
    )
}

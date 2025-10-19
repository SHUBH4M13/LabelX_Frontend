import React from 'react'
import efsa_logo from "../../assets/efsa_logo.svg"
import Fssai from "../../assets/Fssai_Logo.svg"
import fda_logo from "../../assets/fda_logo.svg"


export default function Carasouel() {
    return (
        <div className=' flex flex-col bg-gray-300'>
            <div className=' bg-white py-16 px-18'>

                <div className='text-center font-bold text-5xl'>
                    <h3>Global Standards We Follow</h3>
                </div>

                <div className=' flex justify-around items-center mt-6'>

                    <div>
                        <img
                            className='w-[200px]'
                            src={Fssai} alt="" />
                    </div>

                    <div>
                        <img
                            className='w-[200px]'
                            src={efsa_logo} alt="" />
                    </div>


                    <div>
                        <img
                            className='w-[200px]'
                            src={fda_logo} alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}

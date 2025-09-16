import React from 'react'
import { useNavigate } from 'react-router'
import CusButton from './CusButton'

export default function FormBox() {
    const navigate = useNavigate();
    return (
        <>
            <div className='text-center mb-1'>
                <h2 className='text-2xl font-bold text-primary mb-1'>Create Account</h2>
                <p className='text-textcolor/70 text-sm'>Fill in your details to get started</p>
            </div>

            <div className='flex w-[550px] flex-col items gap-6 bg-white shadow-xl hover:shadow-black/40 justify-center items-center h-[650px] border-white/10 duration-300 border-2 rounded-3xl px-8 '>

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-primary'>Full Name</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="text"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-primary'>Email Address</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-secondaryFore'>Password</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="password"
                        placeholder="Create a password"
                    />
                </div>

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-secondaryFore'>Confirm Password</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="password"
                        placeholder="Confirm your password"
                    />
                </div>

                <div className='flex justify-around  w-full gap-5'>

                    <div>
                        <label htmlFor="accountType" className='mb-2 text-sm font-semibold text-secondaryFore'>Select any dieases if applicable</label>
                        <select
                            id="accountType"
                            className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor cursor-pointer'
                        >
                            <option value="">Select any dieases if applicable</option>
                            <option value="">Diabetes</option>
                            <option value="">Kidney Problem</option>
                            <option value="">Liver Issues</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="accountType" className='mb-2 text-sm font-semibold text-secondaryFore'>Any Allergy</label>
                        <select
                            id="accountType"
                            className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor cursor-pointer'
                        >
                            <option value="">Select if you are allergic to something</option>
                            <option value="">wheat</option>
                            <option value="">Milk</option>
                            <option value="">Soy</option>
                            <option value="">eggs</option>
                            <option value="">Peanuts</option>
                        </select>
                    </div>

                </div>


                <div className='w-full mt-4 flex justify-center items-center'>
                    <CusButton
                        onClick={ () => { navigate("/") }}
                        text={"Create Account"}
                    />
                </div>

                <p className='text-xs text-textcolor/60 text-center'>
                    Already have an account? <span className='text-primary font-semibold cursor-pointer hover:text-primary/80'>Sign in</span>
                </p>

            </div>

        </>


    )
}
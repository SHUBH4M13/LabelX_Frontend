import React from 'react'
import CusButton from '../Components/CusButton'
import { useNavigate } from 'react-router'

export default function Login() {

    const navigate = useNavigate()

    return (
        <div className=' flex justify-center items-center min-h-screen flex-col'>
            <div className='text-center mb-1'>
                <h2 className='text-2xl font-bold text-primary mb-1'>Welcome to LabelX</h2>
                <p className='text-textcolor/70 text-sm'>Login to get started</p>
            </div>

            <div className='md:w-[600px] lg:h-[600px] flex flex-col items gap-6 bg-white shadow-xl hover:shadow-primary/40 justify-center items-center border-white/10 duration-300 border-2 rounded-3xl px-8 py-3 '>

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-primary'>Email Address</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="email"
                        placeholder="Enter your email"
                        name='email'
                        required
                        // value={Data.email}
                        // onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-primary'>Password</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="password"
                        placeholder="Create a password"
                        name='password'
                        required
                        // value={Data.password}
                        // onChange={handleChange}
                    />
                </div>


                <div className='w-full mt-4 flex justify-center items-center'>
                    <CusButton
                        // onClick={handleSignup}
                        text={"Login"}
                    />
                </div>


                {/* {Error && (
                    <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md shadow-sm my-2 text-center">
                        <p className="text-sm">{Error}</p>
                    </div>
                )} */}

                <p className='text-s text-textcolor/60 text-center'>
                    Don't have an account? 
                    <span
                    onClick={() => {
                        navigate("/login")
                    }}
                    className='text-primary font-semibold cursor-pointer hover:text-primary/80'> Sign in</span>
                </p>

            </div>

        </div>

    )
}


    
    
import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import CusButton from '../Components/CusButton'
import { useNavigate } from 'react-router'
import googleicon from "../assets/googleicon.svg"

export default function Login() {

    const navigate = useNavigate()

    const [error, seterror] = useState('');
    const [loading, setloading] = useState(false);
    const [Data, setData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    async function handleLogin() {

        try {

            if (!Data.email || !Data.password) {
                seterror("required fields are missing");
                return;
            }

            setloading(true);
            const url = import.meta.env.VITE_BACKEND_URL + '/login'
            const res = await axios.post(url, Data)
            console.log(res)

            if (res.status >= 400) {
                seterror(res.data.msg)
                setloading(false);
                return
            } else {
                const token = res.data.token
                localStorage.setItem("token", token)
                navigate("/")
            }

        } catch (err) {
            seterror("Error : Please try again later")
        } finally {
            setloading(false);
        }

    }

    async function handleGoogleSignUp() {
        try {
            const url = import.meta.env.VITE_BACKEND_URL + '/auth/google'
            window.location.href = url;
        } catch (err) {
            console.log(err);
        }
    }

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
                        value={Data.email}
                        onChange={handleChange}
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
                        value={Data.password}
                        onChange={handleChange}
                    />
                </div>


                <div className='w-full mt-4 flex justify-center items-center'>
                    <CusButton
                        onClick={handleLogin}
                        text={"Login"}
                    />
                </div>


                {error && (
                    <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md shadow-sm my-2 text-center">
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <div className='relative flex items-center w-full my-2'>
                    <div className='flex-grow border-t border-gray-300'></div>
                    <span className='px-4 text-sm text-textcolor/60'>or</span>
                    <div className='flex-grow border-t border-gray-300'></div>
                </div>

                <div className='flex justify-center items-center'>
                    <button
                        onClick={handleGoogleSignUp}
                        className='w-full px-6 py-3 cursor-pointer flex gap-3 justify-center items-center text-center border-2 border-gray-300 hover:border-primary/30 rounded-xl transition-all duration-200 hover:shadow-md'>
                        <img
                            className='w-5 h-5'
                            src={googleicon} alt="googleicon" />
                        <p className='text-sm font-semibold'>Login with Google</p>
                    </button>
                </div>

                <p className='text-s text-textcolor/60 text-center'>
                    Don't have an account?
                    <span
                        onClick={() => {
                            navigate("/signup")
                        }}
                        className='text-primary font-semibold cursor-pointer hover:text-primary/80'> Sign in</span>
                </p>

            </div>

        </div>

    )
}




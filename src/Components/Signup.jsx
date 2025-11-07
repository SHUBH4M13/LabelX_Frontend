import { useNavigate } from 'react-router'
import CusButton from './CusButton'
import axios from 'axios';
import { useState } from 'react';
import googleicon from "../assets/googleicon.svg"
import AllergySelection from "../Components/AllergySelection"
import DiseaseSelection from "../Components/DiseaseSelection"

export default function Signup() {

    const navigate = useNavigate();

    const [Data, setData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmpassword: '',
        allergy: [],
        disease: []
    })

    const [Error, setError] = useState('');
    const [loading, setloading] = useState(false);

    async function handleSignup() {

        if (!Data.fullName || !Data.email || !Data.password || !Data.confirmpassword) {
            setError("All fields are required.");
            return;
        }

        if (Data.password != Data.confirmpassword) {
            setError("Password do not match")
            return
        }

        const url = import.meta.env.VITE_BACKEND_URL + `/signup`
        setloading(true)
        setError(" ")

        try {
            const res = await axios.post(url, Data)

            if (res.status === 201) {
                const token = res.data.token
                localStorage.setItem(`token`, token)
                navigate("/otp")
            } else {
                setError(res.data.message || "Something went wrong")
            }
        } catch (error) {
            setError(res.data.message)
        } finally {
            setloading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    async function handleGoogleSignUp() {
        try {
            const url = import.meta.env.VITE_BACKEND_URL + '/auth/google'
            window.location.href = url;
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='w-full flex flex-col items-center justify-center min-h-screen p-4'>
            <div className='text-center mb-6'>
                <h2 className='text-3xl font-bold text-primary mb-2'>Create Account</h2>
                <p className='text-textcolor/70 text-sm'>Fill in your details to get started</p>
            </div>

            <div className=' md:w-[600px] flex flex-col gap-5 bg-white shadow-xl hover:shadow-primary/40 border-white/10 duration-300 border-2 rounded-3xl px-8 py-8'>

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-primary'>Full Name</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="text"
                        placeholder="Enter your full name"
                        name='fullName'
                        required
                        value={Data.fullName}
                        onChange={handleChange}
                    />
                </div>

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

                <div className='flex flex-col w-full'>
                    <label className='mb-2 text-sm font-semibold text-primary'>Confirm Password</label>
                    <input
                        className='border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor placeholder-textcolor/50'
                        type="password"
                        name='confirmpassword'
                        placeholder="Confirm your password"
                        required
                        value={Data.confirmpassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col justify-between gap-6 w-full mt-2">

                    <div className="flex-1">
                        <h3 className="text-primary font-semibold mb-2 text-sm">
                            Select any allergies (if applicable)
                        </h3>
                        <AllergySelection
                            value={Data.allergy}
                            onChange={(selected) =>
                                setData((prev) => ({ ...prev, allergy: selected }))
                            }
                        />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-primary font-semibold mb-2 text-sm">
                            Select any diseases or health conditions
                        </h3>
                        <DiseaseSelection
                            value={Data.disease}
                            onChange={(selected) =>
                                setData((prev) => ({ ...prev, disease: selected }))
                            }
                        />
                    </div>

                </div>

                {Error && (
                    <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl shadow-sm text-center">
                        <p className="text-sm">{Error}</p>
                    </div>
                )}

                <div className='w-full flex justify-center items-center mt-2'>
                    <CusButton
                        onClick={handleSignup}
                        text={"Create Account"}
                    />
                </div>

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
                        <p className='text-sm font-semibold'>Sign in with Google</p>
                    </button>
                </div>

                <p className='text-sm text-textcolor/60 text-center mt-2'>
                    Already have an account?
                    <span
                        onClick={() => {
                            navigate("/login")
                        }}
                        className='text-primary font-semibold cursor-pointer hover:text-primary/80 ml-1'>Sign in</span>
                </p>

            </div>
        </div>
    )
}
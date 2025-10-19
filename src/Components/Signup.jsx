import { useNavigate } from 'react-router'
import CusButton from './CusButton'
import axios from 'axios';
import { useState } from 'react';

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
            navigate("/otp")
        // if (!Data.fullName || !Data.email || !Data.password || !Data.confirmpassword) {
        //     setError("All fields are required.");
        //     return; 
        // }

        // if (Data.password != Data.confirmpassword) {
        //     setError("Password do not match")
        //     return
        // }

        // const url = import.meta.env.VITE_BACKEND_URL + `/signup`
        // setloading(true)
        // setError(" ")

        // try {
        //     const res = await axios.post(url, Data)

        //     if (res.status === 201) {
        //         const token = res.data.token
        //         localStorage.setItem(`token`, token)
        //         navigate('/')
        //     } else {
        //         setError(res.data.message || "Something went wrong")
        //     }
        // } catch (error) {
        //     setError(error.response.data.message)
        // } finally {
        //     setloading(false);
        // }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    // const handleArrayChange = (field, value) => {
    //     setData((prev) => {
    //         const arr = prev[field];
    //         return arr.includes(value)
    //             ? { ...prev, [field]: arr.filter((item) => item !== value) }
    //             : { ...prev, [field]: [...arr, value] };
    //     });
    // };


    return (
        <>
            <div className='text-center mb-1'>
                <h2 className='text-2xl font-bold text-primary mb-1'>Create Account</h2>
                <p className='text-textcolor/70 text-sm'>Fill in your details to get started</p>
            </div>

            <div className='md:w-[600px] lg:h-[600px] flex flex-col items gap-6 bg-white shadow-xl hover:shadow-primary/40 justify-center items-center border-white/10 duration-300 border-2 rounded-3xl px-8 py-3 '>

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
                    <label className='mb-2 text-sm font-semibold text-secondaryFore'>Password</label>
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
                    <label className='mb-2 text-sm font-semibold text-secondaryFore'>Confirm Password</label>
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


                <div className='w-full mt-4 flex justify-center items-center'>
                    <CusButton
                        onClick={handleSignup}
                        text={"Create Account"}
                    />
                </div>


                {Error && (
                    <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md shadow-sm my-2 text-center">
                        <p className="text-sm">{Error}</p>
                    </div>
                )}

                <p className='text-s text-textcolor/60 text-center'>
                    Already have an account? 
                    <span
                    onClick={() => {
                        navigate("/login")
                    }}
                    className='text-primary font-semibold cursor-pointer hover:text-primary/80'> Sign in</span>
                </p>

            </div>

        </>

    )
}
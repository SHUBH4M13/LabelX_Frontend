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
        allergy: [],
        disease: []
    })

    const [Error , setError] = useState('');
    const [loading , setloading] = useState(false);

    async function handleSignup() {
        console.log("button clicked");
        const url = import.meta.env.VITE_BACKEND_URL + `/signup`
        const res = await axios.post( url , Data )
        try {
            if( res.status === 201 ){
                navigate('/otp')
            } else {
                setError(res.data.message)  
            }
        } catch (error) {
            setError(res.data.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    const handleArrayChange = (field, value) => {
        setData((prev) => {
            const arr = prev[field];
            return arr.includes(value)
                ? { ...prev, [field]: arr.filter((item) => item !== value) }
                : { ...prev, [field]: [...arr, value] };
        });
    };


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
                        name='fullName'
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
                        value={Data.password}
                        onChange={handleChange}
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
                        {/* <select
                            id="disease"
                            name="disease"
                            multiple
                            value={Data.disease}
                            onChange={(e) => {
                                const selected = Array.from(e.target.selectedOptions, (option) => option.value);
                                setData((prev) => ({
                                    ...prev,
                                    disease: selected,
                                }));
                            }}
                            className="border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor cursor-pointer"
                        >
                            <option value="Diabetes">Diabetes</option>
                            <option value="Kidney Problem">Kidney Problem</option>
                            <option value="Liver Issues">Liver Issues</option>
                        </select> */}
                    </div>

                    <div>
                        <label htmlFor="accountType" className='mb-2 text-sm font-semibold text-secondaryFore'>Any Allergy</label>
                        {/* <select
                            name="allergy"
                            multiple
                            value={Data.allergy}
                            onChange={handleArrayChange}
                            className="border-primary/30 bg-primaryFore border-2 w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-textcolor cursor-pointer h-32"
                        >
                            <option value="wheat">Wheat</option>
                            <option value="milk">Milk</option>
                            <option value="soy">Soy</option>
                            <option value="eggs">Eggs</option>
                            <option value="peanuts">Peanuts</option>
                        </select> */}

                        <div className="mt-4 text-sm text-gray-700">
                            <strong>Selected allergies:</strong> {Data.allergy.join(", ") || "None"}
                        </div>
                    </div>

                </div>


                <div className='w-full mt-4 flex justify-center items-center'>
                    <CusButton
                        onClick={handleSignup}
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
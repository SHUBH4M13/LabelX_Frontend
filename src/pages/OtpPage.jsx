import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import CusButton from "../Components/CusButton"
import axios from 'axios';

export default function OtpPage() {

  const navigate = useNavigate();

  const [Otp, setOtp] = useState(['', '', '', ''])
  const [canResend, setcanResend] = useState(false)
  const [ResendTimer, setResendTimer] = useState(60)
  const [error, seterror] = useState(false)
  const [loading, setloading] = useState(false)
  const inputRefs = useRef([]);

  useEffect(() => {
    if (ResendTimer > 0) {
      const Timer = setTimeout(() => { setResendTimer(ResendTimer - 1) }, 1000)
      return () => clearTimeout(Timer);
    } else {
      setcanResend(true)
    }
  }, [ResendTimer])

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !Otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      navigator.clipboard.readText()
        .then(text => {
          const pastedOtp = text.replace(/\D/g, '').slice(0, 4).split('');
          const newOtp = [...Otp];
          pastedOtp.forEach((digit, i) => {
            if (i < 4) newOtp[i] = digit;
          });
          setOtp(newOtp);
          const lastIndex = Math.min(pastedOtp.length, 3);
          inputRefs.current[lastIndex]?.focus();
        });
    }
  };

  const handleInputChange = (index, value) => {
    if (value.length > 1) return

    const newotp = [...Otp]
    newotp[index] = value
    setOtp(newotp)
    seterror('')

    if (index < 3) {
      inputRefs.current[index + 1]?.focus()
    }

  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    const otpString = Otp.join('')

    if (otpString.length != 4) {
      seterror('Please enter all 4 digits')
      return
    }

    setloading(true)
    seterror('')

    try {
      const url = import.meta.env.VITE_BACKEND_URL + `/otp`
      const res = axios.post(url, otpString);
      if (res.status === 200) {
        navigate("/")
      }
    } catch (error) {
      if (res.status > 400) {
        seterror(error.response.data.error || 'Invalid OTP');
      }
      console.log(error)
    } finally {
      setloading(false)
    }

  }

  const handleResend = async () => {
    if (!canResend) return;

    setcanResend(false);
    setResendTimer(60);
    seterror('');

    try {
      //axios call here
      seterror('');
    } catch (err) {
      seterror('Failed to resend code. Please try again.');
      setcanResend(true);
      setResendTimer(0);
    }
  };

  return (
    <div className='flex flex-col justify-center gap-5 items-center min-h-screen'>

      <div className=' px-4 flex flex-col gap-4 '>
        <h1 className='text-center text-black text-6xl font-semibold'>Verify Your Email</h1>
        <p className='text-center text-md '>We've sent a 4-digit code to your email address</p>
      </div>

      <div className=' flex flex-col justify-evenly items-center w-[300px] sm:w-[450px] h-[350px] border-2 border-gray-500/20 rounded-xl hover:border-primary/60 duration-200 text-center shadow-primary/10 px-5 py-1'>

        <div className=' flex gap-4 items-center justify-center'>
          {Otp.map((otp, index) => (
            <input
              required
              key={index}
              inputMode='numeric'
              maxLength={1}
              value={Otp[index]}
              ref={el => inputRefs.current[index] = el}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onChange={(e) => handleInputChange(index, e.target.value.replace(/\D/g, ''))}
              className=' text-center w-12 h-12 border-3  border-gray-500/20 duration-200 focus:outline-primary rounded-xl ' />
          ))}
        </div>

        <div>
          <CusButton
            onClick={handleSubmit}
            text={"Verify OTP"} />
        </div>

        <span
          onClick={handleResend}
          className=' cursor-pointer text-[14px] hover:underline duration-200 text-primary'>
          Resend OTP {canResend ? '' : `(${ResendTimer}s)`}
        </span>


        {error &&
          (
            <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md shadow-sm my-2 text-center">
              <p className="text-sm">{error}</p>
            </div>
          )
        }

        <div>
          <p className=' text-[14px] text-gray-500 ' >Check your spam folder if you don't see the email</p>
        </div>

      </div>


    </div>
  )
}

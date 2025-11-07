import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import CusButton from "../Components/CusButton"
import axios from 'axios'
import useEmailStore from '../Components/Store/EmailStore'

export default function OtpPage() {
  const navigate = useNavigate()
  const inputRefs = useRef([])

  const [Otp, setOtp] = useState(['', '', '', ''])
  const [canResend, setCanResend] = useState(false)
  const [ResendTimer, setResendTimer] = useState(60)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { email, resetEmail } = useEmailStore()

  useEffect(() => {
    if (ResendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(ResendTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [ResendTimer])

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !Otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }

    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      navigator.clipboard.readText().then(text => {
        const pastedOtp = text.replace(/\D/g, '').slice(0, 4).split('')
        const newOtp = [...Otp]
        pastedOtp.forEach((digit, i) => {
          if (i < 4) newOtp[i] = digit
        })
        setOtp(newOtp)
        const lastIndex = Math.min(pastedOtp.length, 3)
        inputRefs.current[lastIndex]?.focus()
      })
    }
  }

  const handleInputChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...Otp]
    newOtp[index] = value
    setOtp(newOtp)
    setError('')

    if (index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const otpString = Otp.join('')
    if (otpString.length !== 4) {
      setError('Please enter all 4 digits')
      return
    }

    if (!email) {
      setError('Email not found. Please sign up again.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const url = import.meta.env.VITE_BACKEND_URL + '/otp'

      // ✅ Await axios call
      const res = await axios.post(url, { email, otp: otpString })

      if (res.status === 200) {
        resetEmail()
        navigate('/')
      }
    } catch (err) {
      console.log('OTP Verification Error:', err)
      const errMsg = err.response?.data?.message || 'Invalid OTP. Please try again.'
      setError(errMsg)
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (!canResend) return
    setCanResend(false)
    setResendTimer(60)
    setError('')

    try {
      const url = import.meta.env.VITE_BACKEND_URL + '/resend-otp'
      await axios.post(url, { email })
      setError('A new OTP has been sent to your email.')
    } catch (err) {
      setError('Failed to resend code. Please try again.')
      setCanResend(true)
      setResendTimer(0)
    }
  }

  return (
    <div className='flex flex-col justify-center gap-5 items-center min-h-screen'>
      <div className='px-4 flex flex-col gap-4'>
        <h1 className='text-center text-black text-5xl font-semibold'>Verify Your Email</h1>
        <p className='text-center text-md'>We've sent a 4-digit code to {email || 'your email address'}.</p>
      </div>

      <div className='flex flex-col justify-evenly items-center w-[300px] sm:w-[450px] h-[350px] border-2 border-gray-500/20 rounded-xl hover:border-primary/60 duration-200 text-center shadow-primary/10 px-5 py-1'>
        <div className='flex gap-4 items-center justify-center'>
          {Otp.map((otp, index) => (
            <input
              key={index}
              required
              inputMode='numeric'
              maxLength={1}
              value={Otp[index]}
              ref={(el) => (inputRefs.current[index] = el)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onChange={(e) => handleInputChange(index, e.target.value.replace(/\D/g, ''))}
              className='text-center w-12 h-12 border-3 border-gray-500/20 duration-200 focus:outline-primary rounded-xl'
            />
          ))}
        </div>

        <div>
          <CusButton onClick={handleSubmit} text={loading ? 'Verifying...' : 'Verify OTP'} />
        </div>

        <span
          onClick={handleResend}
          className={`cursor-pointer text-[14px] hover:underline duration-200 ${
            canResend ? 'text-primary' : 'text-gray-400'
          }`}
        >
          {canResend ? 'Resend OTP' : `Resend OTP in ${ResendTimer}s`}
        </span>

        {error && (
          <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md shadow-sm my-2 text-center">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div>
          <p className='text-[14px] text-gray-500'>
            Check your spam folder if you don't see the email.
          </p>
        </div>
      </div>
    </div>
  )
}

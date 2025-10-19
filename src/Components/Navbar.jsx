import React, { useEffect, useState } from 'react'
import { ScanLine } from "lucide-react"
import CusButton from './CusButton'
import { useNavigate } from 'react-router'

export default function Navbar() {
  const navigate = useNavigate();
  
  const [HaveToken, setHaveToken] = useState('')
  

  useEffect( () => {
    const token = (localStorage.getItem('token'))
    setHaveToken(!!token)
  }, [])

  return (
    <div className=' h-[10vh]  bg-lightbg sm:px-20 px-10 flex items-center justify-between border-b border-black/10 shadow-md shadow-black/20'>
      <div className=' flex items-center justify-center gap-2 sm:gap-3 '>
        <ScanLine
          strokeWidth={3}
          size={30} />
        <h1 className='mt-1 font-bold text-2xl sm:text-3xl text-center'>LabelX</h1>
      </div>


      {HaveToken ? (
        <CusButton
          onClick={
            () => {
              localStorage.removeItem('token')
              navigate('/login')
              setHaveToken(false)
            }}
          text={"Log Out"} />
      ) : (
        <CusButton
          onClick={
            () => {
              navigate('/signup')
            }}
          text={"Sign in"} />
      )
      }
    </div>
  )
}

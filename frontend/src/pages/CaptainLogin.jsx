import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainLogin = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password:password
      })
  
      console.log(userData)
       setEmail('')
      setPassword('')
  
    }
    return (
      <div className='p-5 h-screen flex flex-col justify-between'>
        <img className='w-15 h-13 ml-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" srcset="" />
        <div>
          <form className='p-3' onSubmit={(e) => {
            submitHandler(e);
          }} >
            <h3 className='text-lg font-medium mb-2'>What's your email id</h3>
            <input required className='text-lg  w-full border py-2 rounded bg-[#eeeeee] placeholder:text-base mb-7 px-4' type="email" placeholder='email@example.com'  value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
            
  
          
            <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
            <input required className='text-lg  w-full border py-2  rounded  bg-[#eeeeee] placeholder:text-base px-4 mb-7' type="password" placeholder='password' value={password} onChange={(e) => {
              setPassword(e.target.value);
            }} />
            
  
  
            <button className='w-full bg-black text-white mt-7 border rounded py-2 font-semibold placeholder:text-base flex flex-col justify-center items-center mb-2 px-4'>Login</button>
  
          </form>
  
          <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
          
  
          
        </div>
  
  
        <div className='p-3'>
           <Link to='/login' className='bg-[#d5622d] text-white  border rounded py-2  font-semibold placeholder:text-base flex flex-col justify-center items-center mb-7'>Sign in as User</Link>
        </div>
      </div>
    )
}

export default CaptainLogin;
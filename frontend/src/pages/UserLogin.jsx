// import { set } from 'mongoose';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});


  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password:password
    })
    console.log(userData);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
          
          <img className='h-10 w-8 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcset="" />
          <div>
            <form onSubmit={(e) => {
              submitHandler(e);
            }}>
              <h3 className='text-lg mb-2 font-medium'>What's your email?</h3>
            
              <input required value={email} onChange={(e) => {
                setEmail(e.target.value);
              }} className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com'/>
            
              <h3 className='text-lg font-medium mt-4'>Enter Password</h3>
    
    
              <input value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' required type="password" placeholder='password' />
              <button className='bg-[#111] font-semibold text-[#fff] mb-6 px-4 py-2 mt-6 rounded w-full'>Login</button>
    
              <p className='text-center mb-2'>Join a fleet? <Link to='/signup' className='text-blue-600'>Register as a Captain</Link></p>
            </form>
          </div>
    
          <div>
            <Link to='/captain-login' className='bg-orange-400 flex items-center justify-center px-4 py-2 w-full rounded font-semibold mb-5 text-white'>Sign In As User</Link>
          </div>
        </div>

  )
}

export default UserLogin

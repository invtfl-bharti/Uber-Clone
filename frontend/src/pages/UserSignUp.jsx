import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';
import { useContext } from 'react';



const UserSignUp = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('')

  

  const navigate = useNavigate()


  const { user, setUser } = useContext(UserDataContext);
  
    const submitHandler = async(e) => {
      e.preventDefault();
      const newUser = ({
        fullname: {
          firstname: firstName,
          lastname:lastName
        },
        email: email,
        password:password
      })


      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, newUser)

      if (response.status === 201) {
        const data = response.data

        setUser(data.user);

        navigate('/home');

        localStorage.setItem('token',data.token)
      }


      setEmail('');
      setFirstName('')
      setLastName('')
      setPassword('')
      
  
    }
    return (
      <div className='p-5 h-screen flex flex-col justify-between'>
        <img className='w-15 h-13 ml-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" srcset="" />
        <div>
          <form className='p-3' onSubmit={(e) => {
            submitHandler(e);
          }} >
            <h3 className='text-base font-medium mb-2'>What's your name</h3>

            <div className='flex gap-3 mb-5'>
              <input required className='text-lg w-1/2 border-none py-2 rounded bg-[#eeeeee] placeholder:text-base mb-7 px-4' type="text" placeholder='first name' value={firstName} onChange={(e) => {
                setFirstName(e.target.value)
              }}/>
              
              <input required className='text-lg w-1/2 border-none py-2 rounded bg-[#eeeeee] placeholder:text-base mb-7 px-4' type="text" placeholder='last name' value={lastName} onChange={(e) => {
                setLastName(e.target.value)
              }}/>
              
            </div>

          <div className='mt-[-22px]'>
            <h3 className='text-base font-medium mb-2'>Enter your email</h3>
              <input required className='text-lg  w-full border-none py-2  rounded  bg-[#eeeeee] placeholder:text-base px-4 mb-10' type="email" placeholder='email' value={email} onChange={(e) => {
                setEmail(e.target.value);
              }} />
          </div>


            <div className='mt-[-20px]'>
              <h3 className='text-base font-medium mb-2'>Enter your password</h3>
              <input required className='text-lg  w-full border-none py-2  rounded  bg-[#eeeeee] placeholder:text-base px-4 mb-7' type="password" placeholder='password' value={password} onChange={(e) => {
                setPassword(e.target.value);
              }} />
            </div>
            
  
  
            <button className='w-full bg-black text-white mt-2 border-none rounded py-2 font-semibold placeholder:text-base flex flex-col justify-center items-center mb-2 px-4 '>Create Account</button>
  
          </form>
  
          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>

          <div>
            <p className='text-[10px] leading-tight mt-[40%] p-5'>This site is protected by reCAPTCHA and the <span className='underline'>
              Google Privacy 
              Policy
            </span> and <span className='underline'>Terms of Service apply</span>.</p>
          </div>
          
  
          
        </div>
  
  
        {/* <div className='p-3'>
           <Link to='/login' className='bg-[#d5622d] text-white  border rounded py-2  font-semibold placeholder:text-base flex flex-col justify-center items-center mb-7'>Sign in as User</Link>
        </div> */}
      </div>
    )
}

export default UserSignUp;
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CaptainContext, { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useContext } from 'react';




const CaptainSignUp = () => {
  const {captain, setCaptain} = useContext(CaptainDataContext)

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [captainData, setCaptainData] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const captainData = ({
        fullname: {
          firstname: firstName,
          lastname:lastName
        },
        email: email,
        password: password,
        
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          type:vehicleType
        }
      })

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/register`,captainData)
      if (response.status === 201) {
        const data = response.data
        setCaptainData(data.captain)

        localStorage.setItem('token', data.token);
        navigate('/captain-home')
      }
      
      // console.log(userData);
      setEmail('');
      setFirstName('')
      setLastName('')
      setPassword('')
      setVehicleColor('')
      setVehicleCapacity('')
      setVehiclePlate('')
      setVehicleType('')
      
  
    }
    return (
      <div className='p-5 h-screen flex flex-col justify-between'>
         {/* <img className='w-15 h-13 ml-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" srcset="" /> */}
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


            <h3 className=''>Vehicle Information</h3>

            <div className='grid grid-cols-2 gap-4 p-3'>
              <input required className='text-lg  w-full border-none py-2  rounded  bg-[#eeeeee] placeholder:text-sm px-4 mb-10' type="text" placeholder='Vehicle Color' value={vehicleColor} onChange={(e) => {
                  setVehicleColor(e.target.value);
              }} />
              
              <input required className='text-lg  w-full border-none py-2  rounded  bg-[#eeeeee] placeholder:text-sm px-5 mb-10' type="text" placeholder='Vehicle Plate' value={vehiclePlate} onChange={(e) => {
                  setVehiclePlate(e.target.value);
              }} />
              
               <input required className='text-lg  w-full border-none py-2  rounded  bg-[#eeeeee] placeholder:text-sm px-4 mb-10' type="text" placeholder='Vehicle Capacity' value={vehicleCapacity} onChange={(e) => {
                  setVehicleCapacity(e.target.value);
              }} />
              
              <select required className='text-sm  w-full border-none py-2  rounded  bg-[#eeeeee] placeholder:text-sm px-2 mb-10' value={vehicleType} onChange={(e) => {
                setVehicleType(e.target.value)
              }}>
                <option value="" default>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
  
            <button className='w-full bg-black text-white mt-2 border-none rounded py-2 font-semibold placeholder:text-base flex flex-col justify-center items-center mb-2 px-4 '>Create Captain Account</button>
  
          </form>
  
          <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>

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

export default CaptainSignUp;
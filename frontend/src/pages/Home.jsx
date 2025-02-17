import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-red-400 w-full pt-6  h-screen flex justify-between  flex-col bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5310f182519763.652f3606b64b0.jpg)] bg-cover bg-center'>
        <img className='w-15 h-13 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" srcset="" />
        <div className='bg-white px-5 py-5 '>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='w-full bg-black text-white py-3 px-3 rounded-md mt-3 flex items-center justify-center text-xl mb-3'>Continue</Link >
        </div>
      </div>
    </div>
  )
}

export default Home

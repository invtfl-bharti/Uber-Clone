import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1563256014-5d7586c22430?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)]  h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='ml-8 w-16' src="https://globaleducationcoalition.unesco.org/uploads/252_Uber_color_logo.png"/>
        <div className='bg-white py-5 px-10'>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center bg-black text-white px-2 py-4 w-[100%] mt-3 rounded '>Continue
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

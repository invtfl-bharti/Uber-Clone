import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const CaptainSignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password:password
    })

  }

  
  return (
    
    <div className='p-7 flex flex-col justify-between h-screen'>
          
          <img className='w-16 mb-10 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcset="" />
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
              <button className='bg-[#111] font-semibold text-[#fff] mb-6 px-4 py-2 mt-6 rounded w-full'>Create Captain Account</button>
    
              <p className='text-center mb-2'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
            </form>
          </div>
    
          <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
        </div>
  )
}

export default CaptainSignUp

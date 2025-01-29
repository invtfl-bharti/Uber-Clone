import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const UserSignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const[userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    // Store values before resetting
    const updatedUserData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    };

    setUserData(updatedUserData);

    // Now reset input fields
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
};





  return (
    <div className='p-7 flex flex-col justify-start  h-screen'>
          
          <img className=' w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" srcset="" />
          <div>
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className='text-lg mb-2 font-medium'>Enter your Full Name</h3>
          <div className="flex gap-2">
              
            <input required className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' type="text" placeholder='First Name' value={firstName} onChange={(e) => {
              setFirstName(e.target.value)
            }}
            />
            <input required className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' type="text" placeholder='Last Name' value={lastName} onChange={(e) => {
              setLastName(e.target.value)
            }}
            />
          </div>
            
          <h3 className='text-lg font-medium mt-7 mb-2'>Enter your email</h3>
          <input className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' required type="email" placeholder='email@gmail.com' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}
          />



          <h3 className='text-lg font-medium mt-7 mb-2'>Enter Password</h3>
          <input className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' required type="password" placeholder='password'  value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}
          />



          <button className='bg-[#111] font-semibold text-[#fff] mb-6 px-4 py-3 mt-8 rounded w-full'>Create Account</button>
    
          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
        </form>
      </div>
    
      <div>
          <p className='text-[10px] leading-tight mt-10'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div> 
  )

}
export default UserSignUp

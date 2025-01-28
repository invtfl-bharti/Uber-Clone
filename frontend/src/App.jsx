import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'


function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App

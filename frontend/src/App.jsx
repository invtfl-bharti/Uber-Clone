import React from 'react'
import Home from "./pages/Home"
import UserLogin from './pages/UserLogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import { Routes, Route } from 'react-router-dom'
import UserSignUp from './pages/UserSignUp'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/users/logout" element={<UserLogout />} />
        <Route path="captain-home" element={<CaptainHome />} />
        <Route path="/home" element={
          <UserProtectWrapper><Home/></UserProtectWrapper>
        } />
        <Route path="/captain-home" element={
          <CaptainProtectWrapper> <CaptainHome/></CaptainProtectWrapper>
        } />

      </Routes>
    </div>
  )
}

export default App

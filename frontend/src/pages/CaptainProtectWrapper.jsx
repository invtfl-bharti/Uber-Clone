import React from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useContext } from 'react';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = Navigate();

    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
    }, [token]);

    axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`, {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/captain-login') 
    })


    return (
         <div>Loading...</div>
    )



}

export default CaptainProtectWrapper

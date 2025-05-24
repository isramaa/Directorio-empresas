import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'


export default function LayoutClient() {
  const { getRol } = AuthUser()
  const navigate = useNavigate()

  useEffect(()=>{
    if(getRol()!="client"){
      navigate("/")
    }
  },[])
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

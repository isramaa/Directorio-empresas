import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'


export default function LayoutAdmin() {
  const { getRol } = AuthUser()
  const navigate = useNavigate()

  useEffect(()=>{
    const rol = getRol();
    //console.log("ROL DETECTADO:", rol);

    if(getRol()!="admin"){
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

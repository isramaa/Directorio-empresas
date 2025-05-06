import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'

export default function LayoutPublic() {
  return (
    <>
    <h1>PUBLIC</h1>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

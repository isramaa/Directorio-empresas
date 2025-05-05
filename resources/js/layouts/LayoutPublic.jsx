import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

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

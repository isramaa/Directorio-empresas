import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


export default function LayoutClient() {
  const { getRol } = AuthUser()
  const navigate = useNavigate()

  useEffect(()=>{
    if(getRol!="client"){
      navigate("/")
    }
  },[])
  return (
    <div>
        <h1>CLIENT</h1>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

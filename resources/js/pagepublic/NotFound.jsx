import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1>UPS!...Not Found</h1>
        <Link to={"/"} className="mt-5 btn btn-primary rounded-pill pe-5  ps-5">Inicio</Link>
    </div>
  )
}

export default NotFound
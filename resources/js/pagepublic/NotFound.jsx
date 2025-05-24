import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <div className="display-1 fw-bold text-danger mb-3">
          <i className="bi bi-exclamation-triangle-fill"></i>
        </div>
        <h1 className="fw-bold mb-3">¡Página no encontrada!</h1>
        <p className="lead text-secondary mb-4">La página que buscas no existe o ha sido movida.</p>
        <Link to="/" className="btn btn-primary btn-lg rounded-pill px-5 shadow">
          <i className="bi bi-house-door me-2"></i>Ir al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
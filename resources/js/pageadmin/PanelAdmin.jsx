import React from 'react'
import Sidebar from './Sidebar'

const PanelAdmin = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className='row'>
        <Sidebar/>
        <main className="col-sm-9 d-flex align-items-center justify-content-center">
          <div className="card shadow rounded-4 border-0 w-100 text-center py-5 bg-white">
            <div className="card-body">
              <h1 className="display-5 fw-bold mb-3 text-primary">
                <i className="bi bi-shield-lock me-2"></i>Panel de Administración
              </h1>
              <p className="lead text-secondary">Bienvenido al panel de administración. Selecciona una opción del menú lateral para comenzar.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PanelAdmin
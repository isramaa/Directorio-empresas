import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5 rounded-top shadow-lg w-100 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-2 mb-md-0">
            <span className="fw-bold" style={{letterSpacing: '1px'}}>&copy; {new Date().getFullYear()} DIRECTORIO DE EMPRESAS</span>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center align-items-center gap-1">
            <span style={{fontWeight: 500, fontSize: '1rem'}}>Desarrollado por&nbsp;</span>
            <a href="https://github.com/isramaa" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none fw-semibold" style={{fontSize: '1rem'}}>isramaa</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

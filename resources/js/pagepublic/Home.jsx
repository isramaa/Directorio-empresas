import React, { use, useEffect, useState } from 'react'
import Config from '../Config'
import EmpresaModal from './EmpresaModal'

const Home = () => {
  const [empresas, setEmpresas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(null)
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
   getEmpresas()
  }, [])

  const getEmpresas = async () => {
    const response = await Config.GetEmpresas(6)
    setEmpresas(response.data)
  }

  const handleVerMas = (empresa) => {
    setEmpresaSeleccionada(empresa)
    setShowModal(true)
  }

  const filteredEmpresas = empresas.filter(empresa =>
    empresa.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-9 col-lg-8">
          <h1 className='text-center fw-bolder mb-4 text-primary display-5'>DIRECTORIO DE EMPRESAS</h1>

          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body bg-light rounded-4">
              <h5 className="card-title mb-3 text-center fw-semibold">¿Buscas una empresa?</h5>
              <input
                type='search'
                className='form-control rounded-pill shadow-sm'
                placeholder='Buscar empresa...'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-4">
            {filteredEmpresas.length === 0 ? (
              <div className="col-12 text-center text-muted py-5">
                <i className="bi bi-search display-4 mb-3"></i>
                <div className="fw-semibold">No se encontraron empresas</div>
              </div>
            ) : (
              filteredEmpresas.map((empresa) => (
                <div key={empresa.id} className="col-sm-6 col-lg-4">
                  <div className="card h-100 shadow border-0 rounded-4">
                    <img 
                      src={empresa.urlfoto ? `/img/empresa/${empresa.urlfoto}` : 'https://via.placeholder.com/300x200?text=Sin+Imagen'} 
                      className="card-img-top rounded-top-4" 
                      alt={empresa.nombre} 
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="card-body justify-content-center text-center">
                      <h5 className="card-title fw-bold text-primary">{empresa.nombre}</h5>
                      <p className="card-text text-secondary small">{empresa.descripcion}</p>
                      <button className="btn btn-outline-primary rounded-pill px-4 mt-2" onClick={() => handleVerMas(empresa)}>
                        <i className="bi bi-eye me-1"></i>Ver más
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <EmpresaModal show={showModal} empresa={empresaSeleccionada} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Home

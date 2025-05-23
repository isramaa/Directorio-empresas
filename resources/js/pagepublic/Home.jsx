import React, { use, useEffect, useState } from 'react'
import Config from '../Config'
import EmpresaModal from './EmpresaModal'

const Home = () => {
  const [empresas, setEmpresas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(null)

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

  return (
    <div className="container pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <h1 className='text-center fw-bolder'>DIRECTORIO DE EMPRESAS</h1>
          <div className="card">
            <div className="card-body">
              <div className="row">
                {empresas.map((empresa) => (
                  <div key={empresa.id} className="col-sm-4 mb-3">
                    <div className="card">
                      <img 
                        src={empresa.urlfoto ? `/img/empresa/${empresa.urlfoto}` : 'https://via.placeholder.com/300x200?text=Sin+Imagen'} 
                        className="card-img-top" 
                        alt={empresa.nombre} 
                        style={{height: '200px', objectFit: 'cover'}}
                      />
                      <div className="card-body justify-content-center text-center">
                        <h5 className="card-title">{empresa.nombre}</h5>
                        <p className="card-text">{empresa.descripcion}</p>
                        <button className="btn btn-primary" onClick={() => handleVerMas(empresa)}>Ver más</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmpresaModal show={showModal} empresa={empresaSeleccionada} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Home

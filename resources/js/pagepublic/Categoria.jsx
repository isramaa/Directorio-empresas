import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Config from '../Config'
import EmpresaModal from './EmpresaModal'

const Categoria = () => {
  const { slug } = useParams()
  const [categoria, setCategoria] = useState(null)
  const [empresas, setEmpresas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(null)

  useEffect(() => {
    getCategoria()
    // eslint-disable-next-line
  }, [slug])

  const getCategoria = async () => {
    const response = await Config.GetCategoriaBySlug(slug)
    setCategoria(response.data.categoria)
    setEmpresas(response.data.empresas)
  }

  const handleVerMas = (empresa) => {
    setEmpresaSeleccionada(empresa)
    setShowModal(true)
  }

  if (!categoria) return <div className="container pt-5 pb-5 text-center">Cargando...</div>

  return (
    <div className="container pt-5 pb-5">
      <div className="row justify-content-center mb-4">
        <div className="col-sm-8 text-center">
          <img
            src={categoria.urlfoto ? `/img/categoria/${categoria.urlfoto}` : 'https://via.placeholder.com/120?text=Sin+Imagen'}
            alt={categoria.nombre}
            className="mb-3 rounded-circle border border-2"
            style={{width: '120px', height: '120px', objectFit: 'cover'}}
          />
          <h2 className="fw-bold">{categoria.nombre}</h2>
          <p>{categoria.descripcion}</p>
          <button className="btn btn-secondary mt-2" onClick={() => window.history.back()}>&larr; Volver</button>
        </div>
      </div>
      <h4 className="mb-3 text-center">Empresas en esta categoría</h4>
      <div className="row">
        {empresas.length === 0 ? (
          <div className="col-12 text-center text-muted mb-4">
            No hay empresas en esta categoría
          </div>
        ) : (
          empresas.map(empresa => (
            <div key={empresa.id} className="col-sm-4 mb-4">
              <div className="card h-100 text-center">
                <img
                  src={empresa.urlfoto ? `/img/empresa/${empresa.urlfoto}` : 'https://via.placeholder.com/120?text=Sin+Imagen'}
                  alt={empresa.nombre}
                  className="mx-auto mt-3 rounded-circle border border-2"
                  style={{width: '100px', height: '100px', objectFit: 'cover'}}
                />
                <div className="card-body">
                  <h5 className="card-title">{empresa.nombre}</h5>
                  <p className="card-text">{empresa.descripcion}</p>
                  <button className="btn btn-outline-primary mt-2" onClick={() => handleVerMas(empresa)}>Ver más</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <EmpresaModal show={showModal} empresa={empresaSeleccionada} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Categoria
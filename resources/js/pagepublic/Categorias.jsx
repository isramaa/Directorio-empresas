import React, { useEffect, useState } from 'react'
import Config from '../Config'
import { Link } from 'react-router-dom'

const Categorias = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    getCategorias()
  }, [])

  const getCategorias = async () => {
    const response = await Config.GetCategorias()
    setCategorias(response.data)
  }

  return (
    <div className="container pt-5 pb-5">
      <h1 className="text-center fw-bolder mb-4">CATEGORÍAS</h1>
      <div className="row">
        {categorias.map(cat => (
          <div key={cat.id} className="col-sm-4 mb-4">
            <div className="card h-100 text-center">
              <img
                src={cat.urlfoto ? `/img/categoria/${cat.urlfoto}` : 'https://via.placeholder.com/120?text=Sin+Imagen'}
                alt={cat.nombre}
                className="mx-auto mt-3 rounded-circle border border-2"
                style={{width: '100px', height: '100px', objectFit: 'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title">{cat.nombre}</h5>
                <p className="card-text">{cat.descripcion}</p>
                <Link to={`/categorias/${cat.slug}`} className="btn btn-outline-primary mt-2">Ver empresas</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categorias
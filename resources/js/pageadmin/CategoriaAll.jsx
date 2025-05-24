import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import Config from '../Config';
import { Link } from 'react-router-dom';


const CategoriaAll = () => {

    const [categorias, setCategorias] = useState();
    
        useEffect(() => {
            getCategoriaAll();
        },[])
    
        const getCategoriaAll = async () => {
            const response = await Config.GetCategoriaAll()
            setCategorias(response.data)
        }

        const deleteCategoriaById = async (id) => {
            const isDelete = window.confirm("¿Desea borrar la categoria?")
            if(isDelete){
                await Config.DeleteCategoriaById(id)
                getCategoriaAll()
            }
        }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        <Sidebar/>
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-tags me-2"></i> Gestión de Categorías
            </div>
            <div className="card-body">
              <Link to={'/admin/categoria/create'} className='btn btn-success mb-3 rounded-pill px-4'>
                <i className="bi bi-plus-circle me-1"></i>Agregar Categoría
              </Link>
              <table className='table table-hover table-bordered rounded-3 overflow-hidden'>
                <thead className='table-light'>
                  <tr className='text-center align-middle'>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCIÓN</th>
                    <th>ORDEN</th>
                    <th>ACCIÓN</th>
                  </tr>
                </thead>
                <tbody className='text-center align-middle'>
                  {
                    !categorias ? <tr><td colSpan="5" className="text-center">...cargando</td></tr>
                      : categorias.map((cat) => (
                        <tr key={cat.id}>
                          <td>{cat.id}</td>
                          <td>{cat.nombre}</td>
                          <td>{cat.descripcion}</td>
                          <td>{cat.orden}</td>
                          <td>
                            <Link to={`/admin/categoria/edit/${cat.id}`} className='btn btn-outline-primary btn-sm rounded-pill px-3 me-2'>
                              <i className="bi bi-pencil-square me-1"></i>Editar
                            </Link>
                            <button className='btn btn-outline-danger btn-sm rounded-pill px-3' onClick={() => deleteCategoriaById(cat.id)}>
                              <i className="bi bi-trash me-1"></i>Eliminar
                            </button>
                          </td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CategoriaAll
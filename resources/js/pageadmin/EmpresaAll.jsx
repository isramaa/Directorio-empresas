import React, { useEffect, useState } from 'react'
import Config from '../Config';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const EmpresaAll = () => {
  const [empresas, setEmpresas] = useState();

  useEffect(() => {
    getEmpresaAll()
  }, [])

  const getEmpresaAll = async () => {
    const response = await Config.GetEmpresaAll()
    setEmpresas(response.data)
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        <Sidebar />
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-building me-2"></i> Gestión de Empresas
            </div>
            <div className="card-body">
              <table className='table table-hover table-bordered rounded-3 overflow-hidden'>
                <thead className='table-light'>
                  <tr className='text-center align-middle'>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EMAIL</th>
                    <th>TELEFONO</th>
                    <th>DIRECCION</th>
                    <th>ORDEN</th>
                    <th>ACCIÓN</th>
                  </tr>
                </thead>
                <tbody className='text-center align-middle'>
                  {
                    !empresas ? <tr><td colSpan="7" className='text-center'>...cargando</td></tr>
                      : empresas.map((empresas) => (
                        <tr key={empresas.id}>
                          <td>{empresas.id}</td>
                          <td>{empresas.nombre}</td>
                          <td>{empresas.email}</td>
                          <td>{empresas.telefono}</td>
                          <td>{empresas.direccion}</td>
                          <td>{empresas.orden}</td>
                          <td>
                            <Link to={`/admin/empresa/edit/${empresas.id}`} className='btn btn-outline-primary btn-sm rounded-pill px-3'>
                              <i className="bi bi-pencil-square me-1"></i>Editar
                            </Link>
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

export default EmpresaAll
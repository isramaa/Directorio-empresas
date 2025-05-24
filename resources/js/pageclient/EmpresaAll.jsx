import React, { useEffect, useState } from 'react'
import Config from '../Config';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const EmpresaAll = () => {
  const [empresas, setEmpresas] = useState();

  useEffect(() => {
    getEmpresaAllCliente()
  },[])

  const getEmpresaAllCliente = async () => {
    const response = await Config.GetEmpresaAllClient()
    setEmpresas(response.data)
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        <Sidebar />
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-building me-2"></i> Mis Empresas
            </div>
            <div className="card-body">
              <Link to={'/client/empresa/create'} className='btn btn-success mb-3 rounded-pill px-4'>
                <i className="bi bi-plus-circle me-1"></i>Agregar Empresa
              </Link>
              <table className='table table-hover table-bordered rounded-3 overflow-hidden'>
                <thead className='table-light'>
                  <tr className='text-center align-middle'>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EMAIL</th>
                    <th>TELEFONO</th>
                    <th>DIRECCION</th>
                    <th>ORDEN</th>
                    <th>ESTADO</th>
                    <th>ACCIÓN</th>
                  </tr>
                </thead>
                <tbody className='text-center align-middle'>
                  {
                    !empresas ? <tr><td colSpan="8" className='text-center'>...cargando</td></tr>
                      : empresas.map((emp) => (
                        <tr key={emp.id}>
                          <td>{emp.id}</td>
                          <td>{emp.nombre}</td>
                          <td>{emp.email}</td>
                          <td>{emp.telefono}</td>
                          <td>{emp.direccion}</td>
                          <td>{emp.orden}</td>
                          <td>
                            {emp.publicado ? (
                              <span className="badge bg-success">Aprobada</span>
                            ) : (
                              <span className="badge bg-warning text-dark">Pendiente</span>
                            )}
                          </td>
                          <td>
                            <Link to={`/client/empresa/edit/${emp.id}`} className='btn btn-outline-primary btn-sm rounded-pill px-3'>
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
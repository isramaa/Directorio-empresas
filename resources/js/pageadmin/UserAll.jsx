import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Config from '../Config';
import { Link } from 'react-router-dom';

const UserAll = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    getUserAll();
  }, [])

  const getUserAll = async () => {
    const response = await Config.GetUserAll()
    setUsers(response.data)
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        <Sidebar />
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-people me-2"></i> Gestión de Usuarios
            </div>
            <div className="card-body">
              <table className='table table-hover table-bordered rounded-3 overflow-hidden'>
                <thead className='table-light'>
                  <tr className='text-center align-middle'>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>ACCIÓN</th>
                  </tr>
                </thead>
                <tbody className='text-center align-middle'>
                  {
                    !users ? <tr><td colSpan="3" className="text-center">...cargando</td></tr>
                      : users.map((users) => (
                        <tr key={users.id}>
                          <td>{users.id}</td>
                          <td>{users.name}</td>
                          <td>
                            <Link to={`/admin/user/edit/${users.id}`} className='btn btn-outline-primary btn-sm rounded-pill px-3'>
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

export default UserAll
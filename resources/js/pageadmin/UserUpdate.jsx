import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Config from '../Config';
import Sidebar from './Sidebar';

const UserUpdate = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [aprobado, setAprobado] = useState(false);

    useEffect(() => {
    const GetUserById = async () => {
        Config.GetUserById(id).then(({ data }) => {
        setName(data.name ?? ""); 
        setAprobado(data.aprobado ?? false); 
        });
    };
    GetUserById();
    }, []);


    const submitUpdate = async (ev) => {
        ev.preventDefault()
        await Config.GetUserUpdate({name, aprobado}, id)
        navigate('/admin/user')
    }

  return (
    <div className='container-fluid bg-light min-vh-100 py-4'>
      <div className="row">
        <Sidebar/>
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-person-lines-fill me-2"></i> Editar Usuario
            </div>
            <div className="card-body">
              <form onSubmit={submitUpdate}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Nombre</label>
                  <input type="text" className='form-control rounded-pill' value={name ?? ""} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input className='form-check-input' checked={aprobado} onChange={() => setAprobado(!aprobado)} type='checkbox' role='switch' id='aprobado'/>
                    <label className='form-check-label' htmlFor="aprobado">Aprobado</label>
                  </div>
                </div>
                <div className="d-flex gap-2 mt-4">
                  <Link to={-1} className='btn btn-secondary rounded-pill px-4'>
                    <i className="bi bi-arrow-left me-1"></i>Regresar
                  </Link>
                  <button type='submit' className='btn btn-primary rounded-pill px-4'>
                    <i className="bi bi-save me-1"></i>Actualizar Usuario
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default UserUpdate
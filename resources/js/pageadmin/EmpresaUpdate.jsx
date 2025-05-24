import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Config from '../Config';
import Sidebar from './Sidebar';

const EmpresaUpdate = () => {

        const navigate = useNavigate();
        const { id } = useParams();
        const [nombre, setNombre] = useState("");
        const [orden, setOrden] = useState("")
        const [publicado, setPublicado] = useState(false)
    
        useEffect(() => {
            const getEmpresaById = async () => {
            Config.GetEmpresaById(id).then(({ data }) => {
            setNombre(data.nombre)
            setOrden(data.orden)
            setPublicado(data.publicado ?? false)
            });
        };
        getEmpresaById();
        }, [id]);
    
    
        const submitUpdate = async (ev) => {
            ev.preventDefault()
            await Config.GetEmpresaUpdate({nombre, orden, publicado}, id)
            navigate('/admin/empresa');
        }

  return (
    <div className='container-fluid bg-light min-vh-100 py-4'>
      <div className="row">
        <Sidebar/>
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-building me-2"></i> Editar Empresa
            </div>
            <div className="card-body">
              <form onSubmit={submitUpdate}>
                <div className="row mb-3">
                  <div className="col-md-8">
                    <label htmlFor="name" className="form-label fw-semibold">Nombre</label>
                    <input type="text" className='form-control rounded-pill' value={nombre ?? ""} onChange={(e) => setNombre(e.target.value)} />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Orden</label>
                    <input className='form-control rounded-pill' value={orden} onChange={(e) => setOrden(e.target.value)} type='number'/>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input className='form-check-input' checked={publicado} onChange={() => setPublicado(!publicado)} type='checkbox' role='switch' id='publicado'/>
                    <label className='form-check-label' htmlFor="publicado">Publicado</label>
                  </div>
                </div>
                <div className="d-flex gap-2 mt-4">
                  <Link to={-1} className='btn btn-secondary rounded-pill px-4'>
                    <i className="bi bi-arrow-left me-1"></i>Regresar
                  </Link>
                  <button type='submit' className='btn btn-primary rounded-pill px-4'>
                    <i className="bi bi-save me-1"></i>Actualizar Empresa
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

export default EmpresaUpdate
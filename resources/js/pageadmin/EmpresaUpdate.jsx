import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Config from '../Config';
import Sidebar from './Sidebar';

const EmpresaUpdate = () => {

        const navigate = useNavigate();
        const { id } = useParams();
        const [nombre, setNombre] = useState("");
        const [email, setEmail] = useState("");
        const [telefono, setTelefono] = useState("");
        const [direccion, setDireccion] = useState("");
        const [orden, setOrden] = useState("")
    
        useEffect(() => {
            const getEmpresaById = async () => {
            Config.GetEmpresaById(id).then(({ data }) => {
            setNombre(data.nombre)
            setEmail(data.email)
            setTelefono(data.telefono)
            setDireccion(data.direccion)
            setOrden(data.orden)

            });
        };
        getEmpresaById();
        }, [id]);
    
    
        const submitUpdate = async (ev) => {
            ev.preventDefault()
            await Config.GetEmpresaUpdate({nombre, email, telefono, direccion, orden}, id)
            navigate(-1);
        }

  return (
        <div className='container bg-light'>
            <div className="row">
                <Sidebar/>
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-header">EDITAR EMPRESA</div>
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>
                                <div className="col-sm-12">
                                    <label htmlFor="name">Nombre: </label>
                                    <input type="text" className='form-control' value={nombre ?? ""} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="name">Correo electronico: </label>
                                    <input type="text" className='form-control' value={email ?? ""} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="name">Telefono: </label>
                                    <input type="text" className='form-control' value={telefono ?? ""} onChange={(e) => setTelefono(e.target.value)} />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="name">Direccion: </label>
                                    <input type="text" className='form-control' value={direccion ?? ""} onChange={(e) => setDireccion(e.target.value)} />
                                </div>
                                <div className="col-sm-4">
                                        <label>Orden</label>
                                        <input className='form-control' value={orden} onChange={(e) => setOrden(e.target.value)} type='number'/>
                                    </div>
    
                                <div className="btn-group mt-3">
                                    <Link to={-1} className='btn btn-secondary'>Regresar</Link>
                                    <button type='submit' className='btn btn-primary'>Actualizar Empresa</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EmpresaUpdate
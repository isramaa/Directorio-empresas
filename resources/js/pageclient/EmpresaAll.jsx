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
    <div className="container bg-light">
        <div className="row">
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <table className='table'>
                            <thead>
                                <tr className='text-center'>
                                    <th>ID</th><th>NOMBRE</th><th>EMAIL</th><th>TELEFONO</th><th>DIRECCION</th><th>ORDEN</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    !empresas ? <tr><td colSpan="3" className='text-center'>...cargando</td></tr>
                                    : empresas.map(
                                        (empresas) => {
                                            return(
                                                <tr key={empresas.id}>
                                                    <td>{empresas.id}</td>
                                                    <td>{empresas.nombre}</td>
                                                    <td>{empresas.email}</td>
                                                    <td>{empresas.telefono}</td>
                                                    <td>{empresas.direccion}</td>
                                                    <td>{empresas.orden}</td>
                                                    <td>
                                                        <Link to={`/client/empresa/edit/${empresas.id}`} className='btn btn-primary'>Editar</Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmpresaAll
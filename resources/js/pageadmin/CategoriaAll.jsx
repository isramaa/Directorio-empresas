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

  return (
    <div className="container bg-light">
        <div className="row">
        <Sidebar/>
        <div className="col-sm-9 mt-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <Link to={'/admin/categoria/create'} className='btn btn-primary'>Agregar Categoría</Link>
                    <table className='table'>
                        <thead>
                            <tr className='text-center'>
                                <th>ID</th><th>NOMBRE</th><th>DESCRIPCIÓN</th><th>ORDEN</th><th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                !categorias ? <tr><td colSpan="3" className="text-center">...cargando</td></tr> 
                                        : categorias.map(
                                    (categorias) => {
                                        return(
                                            <tr key={categorias.id}>
                                                <td>{categorias.id}</td>
                                                <td>{categorias.nombre}</td>
                                                <td>{categorias.descripcion}</td>
                                                <td>{categorias.orden}</td>
                                                <td>
                                                    <Link to={`/admin/categorias/edit/${categorias.id}`} className='btn btn-primary'>Editar</Link>
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

export default CategoriaAll
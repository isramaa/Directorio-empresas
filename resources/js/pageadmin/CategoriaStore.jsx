import React, { useState, useRef } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Config from '../Config'

const CategoriaStore = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [orden, setOrden] = useState('')
    const [urlfoto, setUrlfoto] = useState('')
    const fileInputRef = useRef(null) // Referencia al input de imagen

    const handleInputChange = async (e) => {
        let files = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
            setUrlfoto(e.target.result)
        }
    }

    const submitStore = async (e) => {
        e.preventDefault();
        await Config.GetCategoriaStore({ nombre, descripcion, orden, urlfoto })
        setNombre('');
        setDescripcion('');
        setOrden('');
        setUrlfoto('');
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Limpia el input de tipo file visualmente
        }
    }

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitStore}>
                                <div className="form-group row">
                                    <div className="col-sm-8">
                                        <label>Nombre</label>
                                        <input
                                            className='form-control'
                                            value={nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            type='text'
                                        />
                                    </div>
                                    <div className="col-sm-4">
                                        <label>Orden</label>
                                        <input
                                            className='form-control'
                                            value={orden}
                                            onChange={(e) => setOrden(e.target.value)}
                                            type='number'
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>Descripcion: </label>
                                    <textarea
                                        className='form-control'
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="mt-3">
                                    <label>Imagen:</label>
                                    <input
                                        className='form-control'
                                        type='file'
                                        onChange={handleInputChange}
                                        ref={fileInputRef}
                                    />
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className='btn btn-secondary'>Regresar</Link>
                                    <button type='submit' className='btn btn-primary'>Añadir Categoria</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriaStore

import React, { useState, useRef } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Config from '../Config'

const CategoriaStore = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [orden, setOrden] = useState('')
    const [urlfoto, setUrlfoto] = useState('')
    const [errors, setErrors] = useState({});
    const fileInputRef = useRef(null) 

    const handleInputChange = async (e) => {
        let files = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
            setUrlfoto(e.target.result)
        }
    }

    const validate = () => {
        const newErrors = {};
        if (!nombre) newErrors.nombre = 'El nombre es obligatorio';
        if (orden === '' || isNaN(orden)) newErrors.orden = 'El orden es obligatorio y debe ser un número';
        return newErrors;
    }

    const submitStore = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        await Config.GetCategoriaStore({ nombre, descripcion, orden, urlfoto })
        setNombre('');
        setDescripcion('');
        setOrden('');
        setUrlfoto('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    return (
        <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        <Sidebar />
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-tags me-2"></i> Crear Categoría
            </div>
            <div className="card-body">
              <form onSubmit={submitStore}>
                <div className="row mb-3">
                  <div className="col-md-8">
                    <label className="form-label fw-semibold">Nombre</label>
                    <input className={`form-control rounded-pill${errors.nombre ? ' is-invalid' : ''}`} value={nombre} onChange={(e) => setNombre(e.target.value)} type='text' />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Orden</label>
                    <input className={`form-control rounded-pill${errors.orden ? ' is-invalid' : ''}`} value={orden} onChange={(e) => setOrden(e.target.value)} type='number' />
                    {errors.orden && <div className="invalid-feedback">{errors.orden}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Descripción</label>
                  <textarea className='form-control rounded-3' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={3}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Imagen</label>
                  <input className='form-control' type='file' onChange={handleInputChange} ref={fileInputRef} />
                </div>
                <div className="d-flex gap-2 mt-4">
                  <Link to={-1} className='btn btn-secondary rounded-pill px-4'>
                    <i className="bi bi-arrow-left me-1"></i>Regresar
                  </Link>
                  <button type='submit' className='btn btn-success rounded-pill px-4'>
                    <i className="bi bi-plus-circle me-1"></i>Añadir Categoría
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

export default CategoriaStore

import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Config from '../Config'
import Sidebar from './Sidebar'
import Select from '../components/Select'

const EmpresaStore = () => {
        const navigate = useNavigate()
        const [nombre, setNombre] = useState("");
        const [email, setEmail] = useState("");
        const [orden, setOrden] = useState(0);
        const [descripcion, setDescripcion] = useState("");
        const [telefono, setTelefono] = useState("");
        const [direccion, setDireccion] = useState("");
        const [website, setWebsite] = useState("");
        const [facebook, setFacebook] = useState("");
        const [youtube, setYoutube] = useState("");
        const [tiktok, setTiktok] = useState("");
        const [urlfoto, setUrlfoto] = useState("")
        const[categoria_id, setCategoria_id] = useState()
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
            if (!email) newErrors.email = 'El correo es obligatorio';
            else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) newErrors.email = 'Correo inválido';
            if (!categoria_id) newErrors.categoria_id = 'Seleccione una categoría';
            if (!descripcion) newErrors.descripcion = 'La descripción es obligatoria';
            if (!telefono) newErrors.telefono = 'El teléfono es obligatorio';
            if (!direccion) newErrors.direccion = 'La dirección es obligatoria';
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
            await Config.GetEmpresaStore({ nombre, email, orden, descripcion, telefono, direccion, website, facebook, youtube, tiktok, urlfoto, categoria_id })
            navigate(-1)
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }


    const getCategoriaId = (v) => {
        setCategoria_id(v)
    }

    return (
        <div className="container-fluid bg-light min-vh-100 py-4">
            <div className="row">
                <Sidebar />
                <main className="col-sm-9 mt-3 mb-3">
                    <div className="card shadow rounded-4 border-0">
                        <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
                            <i className="bi bi-building me-2"></i> Crear Empresa
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitStore}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">Nombre</label>
                                        <input className={`form-control rounded-pill${errors.nombre ? ' is-invalid' : ''}`} value={nombre} onChange={(e) => setNombre(e.target.value)} type='text' />
                                        {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label fw-semibold">Orden</label>
                                        <input className={`form-control rounded-pill${errors.orden ? ' is-invalid' : ''}`} value={orden} onChange={(e) => setOrden(e.target.value)} type='number' />
                                        {errors.orden && <div className="invalid-feedback">{errors.orden}</div>}
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label fw-semibold">Categoría</label>
                                        <Select selected={getCategoriaId} value={categoria_id}/>
                                        {errors.categoria_id && <div className="invalid-feedback d-block">{errors.categoria_id}</div>}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input className={`form-control rounded-pill${errors.email ? ' is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">Teléfono</label>
                                        <input className={`form-control rounded-pill${errors.telefono ? ' is-invalid' : ''}`} value={telefono} onChange={(e) => setTelefono(e.target.value)} type='tel' />
                                        {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-semibold">Dirección</label>
                                        <input className={`form-control rounded-pill${errors.direccion ? ' is-invalid' : ''}`} value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                        {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Descripción</label>
                                    <textarea className={`form-control rounded-3${errors.descripcion ? ' is-invalid' : ''}`} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={3}></textarea>
                                    {errors.descripcion && <div className="invalid-feedback">{errors.descripcion}</div>}
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-3">
                                        <label className="form-label fw-semibold">Website</label>
                                        <input className="form-control rounded-pill" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label fw-semibold">Facebook</label>
                                        <input className="form-control rounded-pill" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label fw-semibold">YouTube</label>
                                        <input className="form-control rounded-pill" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label fw-semibold">TikTok</label>
                                        <input className="form-control rounded-pill" value={tiktok} onChange={(e) => setTiktok(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Imagen</label>
                                    <input className="form-control" type="file" onChange={handleInputChange} ref={fileInputRef} />
                                </div>
                                <div className="d-flex gap-2 mt-4">
                                    <Link to={-1} className="btn btn-secondary rounded-pill px-4">
                                        <i className="bi bi-arrow-left me-1"></i>Regresar
                                    </Link>
                                    <button type="submit" className="btn btn-success rounded-pill px-4">
                                        <i className="bi bi-plus-circle me-1"></i>Añadir Empresa
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

export default EmpresaStore

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
        const fileInputRef = useRef(null) 
    
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
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitStore}>
                                <div className="form-group row">
                                    <div className="col-sm-6">
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

                                    <div className="col-sm-4">
                                        <label>Categoría</label>
                                        <Select selected={getCategoriaId} value={categoria_id}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                <div className="col-sm-4">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                    />
                                </div>

                                <div className="col-sm-3">
                                    <label>Teléfono</label>
                                    <input
                                        className="form-control"
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                        type='tel'
                                    />
                                </div>
                                </div>

                                <div className="col-sm-12">
                                    <label>Descripción</label>
                                    <textarea
                                        className="form-control"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="col-sm-12">
                                    <label>Dirección</label>
                                    <input
                                        className="form-control"
                                        value={direccion}
                                        onChange={(e) => setDireccion(e.target.value)}
                                    />
                                </div>

                                <div className="form-group row">
                                <div className="col-sm-3">
                                    <label>Website</label>
                                    <input
                                        className="form-control"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </div>

                                <div className="col-sm-3">
                                    <label>Facebook</label>
                                    <input
                                        className="form-control"
                                        value={facebook}
                                        onChange={(e) => setFacebook(e.target.value)}
                                    />
                                </div>
                                

                                <div className="col-sm-3">
                                    <label>YouTube</label>
                                    <input
                                        className="form-control"
                                        value={youtube}
                                        onChange={(e) => setYoutube(e.target.value)}
                                    />
                                </div>

                                <div className="col-sm-3">
                                    <label>TikTok</label>
                                    <input
                                        className="form-control"
                                        value={tiktok}
                                        onChange={(e) => setTiktok(e.target.value)}
                                    />
                                </div>
                                </div>

                                <div className="mt-3">
                                    <label>Imagen</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        onChange={handleInputChange}
                                        ref={fileInputRef}
                                    />
                                </div>

                                <div className="btn-group mt-3">
                                    <Link to={-1} className="btn btn-secondary">Regresar</Link>
                                    <button type="submit" className="btn btn-primary">Añadir Empresa</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpresaStore

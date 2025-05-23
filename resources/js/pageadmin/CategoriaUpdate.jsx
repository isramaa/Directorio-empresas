import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Config from '../Config';
import Sidebar from './Sidebar';

const CategoriaUpdate = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [orden, setOrden] = useState("");
    const [menu, setMenu] = useState(false);
    const [urlfoto, setUrlfoto] = useState("example.jpg");
    const [file, setFile] = useState("");
    const fileInputRef = useRef(null)

    useEffect(() => {
    const GetCategoriaById = async () => {
        Config.GetCategoriaById(id).then(({ data }) => {
        setNombre(data.nombre)
        setDescripcion(data.descripcion)
        setOrden(data.orden)
        setUrlfoto(data.urlfoto)
        setMenu(data.menu)
        });
    };
    GetCategoriaById();
    }, [id]);


    const submitUpdate = async (ev) => {
        ev.preventDefault()
        await Config.GetCategoriaUpdate({nombre, descripcion, orden,urlfoto, menu}, id)
        navigate(-1);
    }

    const handleInputChange = async (e) => {
        let files = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
            setUrlfoto(e.target.result)
        }
    }

  return (
    <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>
                                <div className="form-group row">
                                    <div className="mt-3">
                                        <div className="form-check form-switch">
                                            <input className='form-check-input' checked={menu} onChange={(e) => setMenu(!menu)} type='checkbox' role='switch' id='menu'/>
                                            <label className='form-check-label' htmlFor='menu'>Publicado</label>
                                        </div>
                                    </div>
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
                                    <img
                                    src={urlfoto.startsWith('data:image') ? urlfoto : `/img/categoria/${urlfoto}?v=${Date.now()}`}
                                    className='img-fluid img-thumbnail'
                                    alt="Vista previa"
                                    style={{ maxWidth: "300px", display: urlfoto ? "block" : "none" }}
                                    />
                                    <input
                                        className='form-control'
                                        type='file'
                                        onChange={handleInputChange}
                                        ref={fileInputRef}
                                    />
                                </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className='btn btn-secondary'>Regresar</Link>
                                    <button type='submit' className='btn btn-primary'>Actualizar Categoria</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CategoriaUpdate
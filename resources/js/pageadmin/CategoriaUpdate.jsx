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
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="row">
        <Sidebar />
        <main className="col-sm-9 mt-3 mb-3">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white fw-bold fs-5 d-flex align-items-center gap-2">
              <i className="bi bi-tags me-2"></i> Editar Categoría
            </div>
            <div className="card-body">
              <form onSubmit={submitUpdate}>
                <div className="row mb-3">
                  <div className="col-md-8">
                    <label className="form-label fw-semibold">Nombre</label>
                    <input className='form-control rounded-pill' value={nombre} onChange={(e) => setNombre(e.target.value)} type='text' />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Orden</label>
                    <input className='form-control rounded-pill' value={orden} onChange={(e) => setOrden(e.target.value)} type='number' />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Descripción</label>
                  <textarea className='form-control rounded-3' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={3}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Imagen</label>
                  <img
                    src={urlfoto.startsWith('data:image') ? urlfoto : `/img/categoria/${urlfoto}?v=${Date.now()}`}
                    className='img-fluid img-thumbnail mb-2 d-block'
                    alt="Vista previa"
                    style={{ maxWidth: "300px", display: urlfoto ? "block" : "none" }}
                  />
                  <input className='form-control' type='file' onChange={handleInputChange} ref={fileInputRef} />
                </div>
                <div className="form-check form-switch mb-3">
                  <input className='form-check-input' checked={menu} onChange={() => setMenu(!menu)} type='checkbox' role='switch' id='menu' />
                  <label className='form-check-label' htmlFor='menu'>Publicado</label>
                </div>
                <div className="d-flex gap-2 mt-4">
                  <Link to={-1} className='btn btn-secondary rounded-pill px-4'>
                    <i className="bi bi-arrow-left me-1"></i>Regresar
                  </Link>
                  <button type='submit' className='btn btn-primary rounded-pill px-4'>
                    <i className="bi bi-save me-1"></i>Actualizar Categoría
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

export default CategoriaUpdate
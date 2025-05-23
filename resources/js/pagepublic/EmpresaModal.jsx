import React from 'react'

const EmpresaModal = ({ show, empresa, onClose }) => {
  if (!show || !empresa) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.3)',
      zIndex: 1050,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="card shadow" style={{maxWidth: 500, width: '100%', borderRadius: 16, padding: 24}}>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">{empresa.nombre}</h4>
            <h5 className='mb-0'>{empresa.categoria}</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="text-center">
          <img 
            src={empresa.urlfoto ? `/img/empresa/${empresa.urlfoto}` : 'https://via.placeholder.com/300x200?text=Sin+Imagen'} 
            alt={empresa.nombre}
            className="img-fluid mb-3 rounded"
            style={{maxHeight: '200px', objectFit: 'cover'}}
          />
          <p>{empresa.descripcion}</p>  
          <h5>{empresa.telefono}</h5>
          <p>{empresa.email}</p>
          <p>{empresa.direccion}</p>

          <div className="container">
            <div className="row mb-2">
              <div className="col-6"><p className="mb-1">{empresa.website}</p></div>
              <div className="col-6"><p className="mb-1">{empresa.facebook}</p></div>
            </div>
            <div className="row">
              <div className="col-6"><p className="mb-1">{empresa.youtube}</p></div>
              <div className="col-6"><p className="mb-1">{empresa.tiktok}</p></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default EmpresaModal;
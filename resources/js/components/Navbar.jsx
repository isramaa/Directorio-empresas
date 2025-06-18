import React from 'react';
import AuthUser from '../pageauth/AuthUser';
import Config from '../Config';

export default function Navbar() {
  const { token, getLogout, rol, user } = AuthUser(); 

  const handleLogout = async () => {
    const token = sessionStorage.getItem('token');
    console.log("Usando token:", token); 

    if (!token) {
      console.warn("No hay token guardado");
      return;
    }

    try {
      const res = await Config.GetLogout(token);
      console.log("Logout OK:", res.data);
    } catch (error) {
      console.error("Error en logout:", error.response?.data || error.message);
    } finally {
      getLogout();
    }
  };

  // Ruta de administración según el rol
  const adminLink = () => {
    if (rol === 'admin') return "/admin";
    if (rol === 'client') return "/client"; 
    return "#";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2 sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" href="/">
          <i className="bi bi-building" style={{fontSize: '1.7rem'}}></i>
          Directorio de Empresas
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3" href="/categorias">Categorías</a>
            </li>
            {token && rol && (
              <li className="nav-item">
                <a className="nav-link fw-bold text-warning px-3" href={adminLink()}>
                  <i className="bi bi-person-gear me-1"></i>Administración | {user.name}
                </a>
              </li>
            )}
            {token ? (
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link btn btn-link fw-bold text-danger px-3">Cerrar Sesión</button>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link fw-bold px-3" href="/login">Inicio de Sesión</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

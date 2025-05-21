import React from 'react';
import AuthUser from '../pageauth/AuthUser';
import Config from '../Config';

export default function Navbar() {
  const { token, getLogout, rol, user } = AuthUser(); // Usamos 'rol' directamente

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
    if (rol === 'client') return "/client"; // corregido si el rol es 'client', no 'cliente'
    return "#";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Dirección de empresas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categorias">Categorías</a>
            </li>

            {token && rol && (
              <li className="nav-item">
                <a className="nav-link fw-bold text-dark" href={adminLink()}>Administración | {user.name}</a>
              </li>
            )}

            {token ? (
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link btn btn-link fw-bold text-danger">Cerrar Sesión</button>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/login">Incio de Sesión</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

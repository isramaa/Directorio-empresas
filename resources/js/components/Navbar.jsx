import React from 'react';
import AuthUser from '../pageauth/AuthUser';
import Config from '../Config';

export default function Navbar() {
  const { token, getLogout } = AuthUser();

  const handleLogout = async () => {
  const token = sessionStorage.getItem('token');
  console.log("Usando token:", token); // Verifica que el token esté presente

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
    getLogout(); // Limpia sesión local
  }
};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Direccion de empresas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categorias">Categorias</a>
            </li>
            {
              token ? (
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link btn btn-link">Logout</button>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="col-sm-3 pt-4 pb-4">
      <div className="list-group shadow rounded-3">
        <NavLink to="/admin/user" className={({ isActive }) => (isActive ? "list-group-item list-group-item-action active fw-bold" : "list-group-item list-group-item-action fw-semibold")}> <i className="bi bi-people me-2"></i>Usuarios</NavLink>
        <NavLink to="/admin/categoria" className={({ isActive }) => (isActive ? "list-group-item list-group-item-action active fw-bold" : "list-group-item list-group-item-action fw-semibold")}> <i className="bi bi-tags me-2"></i>Categoría</NavLink>
        <NavLink to="/admin/empresa" className={({ isActive }) => (isActive ? "list-group-item list-group-item-action active fw-bold" : "list-group-item list-group-item-action fw-semibold")}> <i className="bi bi-building me-2"></i>Empresa</NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
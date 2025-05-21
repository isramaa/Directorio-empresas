import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="col-sm-3 pt-4 pb-4">
                <div className="list-group">
                    <NavLink to = {`/client/empresa`} className={({ isActive }) => (isActive ? "list-group-item active" : "list-group-item")}>Empresa</NavLink>
                </div>
            </div>
  )
}

export default Sidebar
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

//LAYOUTS 
import LayoutPublic from './layouts/LayoutPublic'
import LayoutAdmin from './layouts/LayoutAdmin'
import LayoutClient from './layouts/LayoutClient'

//PUBLIC
import PageHome from './pagepublic/PageHome'
import ProtectedRoutes from './pageauth/ProtectedRoutes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//AUTH
import Login from './pageauth/Login'
import Register from './pageauth/Register'
import PanelAdmin from './pageadmin/PanelAdmin'

//ROL/PANEL CLIENT
import PanelCliente from './pageclient/PanelClient'
import EmpresaAllClient from './pageclient/EmpresaAll'
import EmpresaStore from './pageclient/EmpresaStore'
import EmpresaUpdateClient from './pageclient/EmpresaUpdate'

//ROL/PANEL ADMIN
import UserAll from './pageadmin/UserAll'
import UserUpdate from './pageadmin/UserUpdate'
import CategoriaAll from './pageadmin/CategoriaAll'
import CategoriaStore from './pageadmin/CategoriaStore'
import CategoriaUpdate from './pageadmin/CategoriaUpdate'
import EmpresaAll from './pageadmin/EmpresaAll'
import EmpresaUpdate from './pageadmin/EmpresaUpdate'


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LayoutPublic/>}>
          <Route index element={<PageHome/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element= {<Register/>}/>
        </Route>

        {/* ADMIN */}
        <Route element = {<ProtectedRoutes/>}>
        <Route path="/admin" element={<LayoutAdmin/>}>
          <Route index element={<PanelAdmin/>}/>
          {/* ---USUARIO--- */}
          <Route path='user' element={<UserAll/>}/>
          <Route path='user/edit/:id' element={<UserUpdate/>}/>
          {/* ---CATEGORIA--- */}
          <Route path='categoria' element={<CategoriaAll/>}/>
          <Route path='categoria/create' element={<CategoriaStore/>}/>
          <Route path='categoria/edit/:id' element={<CategoriaUpdate/>}/>
          {/* ---EMPRESA--- */}
          <Route path='empresa' element={<EmpresaAll/>}/>
          <Route path='empresa/edit/:id' element={<EmpresaUpdate/>}/>
        </Route>
        </Route>

        {/* CLIENT */}
        <Route element = {<ProtectedRoutes/>}>
        <Route path="/client" element={<LayoutClient/>}>
          <Route index element={<PanelCliente/>}/>
          <Route path='empresa' element={<EmpresaAllClient/>}/>
          <Route path='empresa/create' element={<EmpresaStore/>}/>
          <Route path='empresa/edit/:id' element={<EmpresaUpdateClient/>}/>
        </Route>
        </Route>

      </Routes>
    </Router>
  )
}

export default App

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
            <App/>
    )
}
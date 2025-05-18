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
import PanelCliente from './pageclient/PanelClient'

//ROL/PANEL ADMIN
import UserAll from './pageadmin/UserAll'
import UserUpdate from './pageadmin/UserUpdate'
import CategoriaAll from './pageadmin/CategoriaAll'

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LayoutPublic/>}>
          <Route index element={<PageHome/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element= {<Register/>}/>
        </Route>

        <Route element = {<ProtectedRoutes/>}>
        <Route path="/admin" element={<LayoutAdmin/>}>
          <Route index element={<PanelAdmin/>}/>
          <Route path='user' element={<UserAll/>}/>
          <Route path='user/edit/:id' element={<UserUpdate/>}/>
          <Route path='categoria' element={<CategoriaAll/>}/>
        </Route>
        </Route>

        <Route element = {<ProtectedRoutes/>}>
        <Route path="/client" element={<LayoutClient/>}>
          <Route index element={<PanelCliente/>}/>
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
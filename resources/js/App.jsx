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
          <Route index element={<PageHome/>}/>
        </Route>
        </Route>

        <Route element = {<ProtectedRoutes/>}>
        <Route path="/client" element={<LayoutClient/>}>
          <Route index element={<PageHome/>}/>
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
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
        Holaaaaaaaaaa soy el cejas
        <br></br>
        <button className='btn btn-primary'>Boton</button>
    </div>
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
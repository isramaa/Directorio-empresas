import React from 'react'
import Sidebar from './Sidebar'

const PanelAdmin = () => {
  return (
    <div className="container bg-light">
      <div className='row justify-content-center mt-5 mb-5'>
      <Sidebar/>
      <div className="col-sm-9">
        <div className="text-center fs-3 fw-bold">ADMIN</div>
      </div>
    </div>
    </div>
  )
}

export default PanelAdmin
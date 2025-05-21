import React from 'react'
import Sidebar from './Sidebar'

const PanelClient = () => {
  return (
    <div className="container bg-light">
        <div className='row justify-content-center mt-5 mb-5'>
          <Sidebar/>
            <div className="col-sm-9">
              <div className="text-center fs-3 fw-bold">CLIENTE</div>
            </div>
        </div>
    </div>
  )
}

export default PanelClient
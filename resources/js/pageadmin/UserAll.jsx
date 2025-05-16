import React, { use, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Config from '../Config';

const UserAll = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        getUserAll();
    },[])

    const getUserAll = async () =>{
        const response = await Config.GetUserAll()
        setUsers(response.data)
    }

  return (
    <div className="container bg-light">
        <div className="row">
        <Sidebar/>
        <div className="col-sm-9 mt-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <table className='table'>
                        <thead>
                            <tr className='text-center'>
                                <th>ID</th><th>NOMBRE</th><th>ACCIÓN</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                !users ? <tr><td colSpan="3" className="text-center">...cargando</td></tr> 
                                        : users.map(
                                    (users) => {
                                        return(
                                            <tr key={users.id}>
                                                <td>{users.id}</td>
                                                <td>{users.name}</td>
                                                <td>Orden</td>
                                            </tr>
                                        )
                                    }
                                )

                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UserAll
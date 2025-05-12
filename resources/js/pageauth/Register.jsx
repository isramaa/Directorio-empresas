import React, { useEffect, useState } from 'react'
import Config from '../Config';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

const Register = () => {
    const { getToken } = AuthUser()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(()=>{
        if(getToken()){
          navigate("/")
        }
      },[])

    const submitRegistro = async(e) => {
        e.preventDefault();

        Config.GetRegister({name, email, password})
        .then(({data}) => {
            if(data.success){
                navigate("/login")
            }
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className="text-center fw-bolder">REGISTRO</h1>

                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="Nombre:"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <input
                                type="email"
                                className="form-control mt-3"
                                placeholder="Email:"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                type="password"
                                className="form-control mt-3"
                                placeholder="Password:"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                onClick={submitRegistro}
                                className="btn btn-primary w-100 mt-3"
                            >
                                ENVIAR
                            </button>

                            <a href="#" className="small text-decoration-none d-block text-center mt-3">
                                Términos y condiciones
                            </a>
                            <hr />
                            <a href="/login" className="btn btn-primary w-100 mt-1">Iniciar Sesión</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register
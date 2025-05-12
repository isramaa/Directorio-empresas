import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';
import Config from '../Config';

const Login = () => {
  const { setToken, getToken } = AuthUser()

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  useEffect(()=>{
          if(getToken()){
            navigate("/")
          }
        },[])

  const submitLogin = async(e) => {
          e.preventDefault();
  
          Config.GetLogin({email, password})
          .then(({data}) => {
            console.log(data)
              if(data.success){
                  //console.log(data)
                  setToken(data.user, data.token)
              }else{
                console.log(data.message)
              }
          });
      };

  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className="text-center fw-bolder">LOGIN</h1>

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
                                onClick={submitLogin}
                                className="btn btn-primary w-100 mt-3"
                            >
                                ENVIAR
                            </button>

                            <p className='text-center mt-2'>{message}</p>
                            <hr />
                            <p className='text-center'>Primera vez?</p>
                            <a href="/register" className="btn btn-primary w-100 mt-1">REGISTRO</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
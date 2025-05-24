import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';
import Config from '../Config';

const Login = () => {
  const { setToken, getToken } = AuthUser()
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  useEffect(()=>{
    if(getToken()){
      navigate("/")
    }
  },[])

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'El correo es obligatorio';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) newErrors.email = 'Correo inválido';
    if (!password) newErrors.password = 'La contraseña es obligatoria';
    return newErrors;
  }

  const submitLogin = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('');
      return;
    }
    setErrors({});
    Config.GetLogin({email, password})
      .then(({data}) => {
        if(data.success){
          setToken(data.user, data.token)
        }else{
          setMessage(data.message || 'Credenciales incorrectas');
        }
      })
      .catch(() => setMessage('Credenciales incorrectas'));
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-sm-4">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white text-center fw-bold fs-4">
              <i className="bi bi-person-circle me-2"></i>Iniciar Sesión
            </div>
            <div className="card-body p-4">
              {message && <div className="alert alert-danger text-center">{message}</div>}
              <form onSubmit={submitLogin} noValidate>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Correo electrónico</label>
                  <input type="email" className={`form-control rounded-pill${errors.email ? ' is-invalid' : ''}`} value={email} onChange={e => setEmail(e.target.value)} required />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Contraseña</label>
                  <input type="password" className={`form-control rounded-pill${errors.password ? ' is-invalid' : ''}`} value={password} onChange={e => setPassword(e.target.value)} required />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold">
                  <i className="bi bi-box-arrow-in-right me-1"></i>Entrar
                </button>
              </form>
              <div className="text-center mt-3">
                <span>¿No tienes cuenta? </span>
                <a href="/register" className="text-primary fw-semibold">Regístrate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
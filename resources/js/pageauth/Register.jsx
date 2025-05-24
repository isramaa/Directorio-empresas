import React, { useEffect, useState } from 'react'
import Config from '../Config';
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

const Register = () => {
  const { getToken } = AuthUser()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  useEffect(()=>{
    if(getToken()){
      navigate("/")
    }
  },[])

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'El nombre es obligatorio';
    if (!email) newErrors.email = 'El correo es obligatorio';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) newErrors.email = 'Correo inválido';
    if (!password) newErrors.password = 'La contraseña es obligatoria';
    else if (password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    return newErrors;
  }

  const submitRegistro = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('');
      return;
    }
    setErrors({});
    Config.GetRegister({name, email, password})
      .then(({data}) => {
        if(data.success){
          navigate("/login")
        } else {
          setMessage(data.message || "Error en el registro")
        }
      })
      .catch(() => setMessage('Error de conexión o servidor.'));
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-sm-4">
          <div className="card shadow rounded-4 border-0">
            <div className="card-header bg-primary text-white text-center fw-bold fs-4">
              <i className="bi bi-person-plus me-2"></i>Registro
            </div>
            <div className="card-body p-4">
              {message && <div className="alert alert-danger text-center">{message}</div>}
              <form onSubmit={submitRegistro} noValidate>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre</label>
                  <input type="text" className={`form-control rounded-pill${errors.name ? ' is-invalid' : ''}`} value={name} onChange={e => setName(e.target.value)} required />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
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
                <button type="submit" className="btn btn-success w-100 rounded-pill fw-bold">
                  <i className="bi bi-person-plus-fill me-1"></i>Registrarse
                </button>
              </form>
              <div className="text-center mt-3">
                <span>¿Ya tienes cuenta? </span>
                <a href="/login" className="text-primary fw-semibold">Inicia sesión</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
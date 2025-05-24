import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthUser = () => {
    const navigate = useNavigate();

    const getToken = () => sessionStorage.getItem('token');
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        return userString ? JSON.parse(userString) : null;
    };
    const getRol = () => sessionStorage.getItem('rol');

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const [rol, setRol] = useState(getRol());

    // Sincroniza el estado con sessionStorage en cambios de storage (otras pestañas o logout)
    useEffect(() => {
        const syncAuth = () => {
            setToken(getToken());
            setUser(getUser());
            setRol(getRol());
        };
        window.addEventListener('storage', syncAuth);
        return () => window.removeEventListener('storage', syncAuth);
    }, []);

    const saveToken = (user, token) => {
        const rol = user.roles?.[0];
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
        if (rol) {
            sessionStorage.setItem('rol', rol);
        } else {
            console.warn("ROL undefined, no se guardó");
        }
        setToken(token);
        setUser(user);
        setRol(rol);
        if (rol === "admin") navigate('/admin');
        if (rol === "client") navigate('/client');
    }

    const getLogout = () => {
        sessionStorage.clear();
        setToken(null);
        setUser(null);
        setRol(null);
        navigate('/');
    }

    return {
        setToken: saveToken,
        token,
        user,
        rol,
        getToken,
        getUser,
        getRol,
        getLogout
    }
}

export default AuthUser;

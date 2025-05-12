import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthUser = () => {
    const navigate = useNavigate();

    const getToken = () => {
        return sessionStorage.getItem('token');
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        return JSON.parse(userString);
    }

    const getRol = () => {
        return sessionStorage.getItem('rol');
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const [rol, setRol] = useState(getRol());

    const saveToken = (user, token) => {
        const rol = user.roles?.[0]; //toma el primer rol si existe

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

        // redirección por rol
        if (rol === "admin") navigate('/admin');
        if (rol === "client") navigate('/client');
    }

    const getLogout = () => {
        sessionStorage.clear();
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

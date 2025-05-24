<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Directorio de Empresas (Laravel + React)

Directorio profesional de empresas desarrollado con **Laravel 12 (API REST)** y **React 18** (SPA), con autenticación segura, paneles diferenciados (admin, cliente, público), validaciones robustas y diseño moderno y responsivo.

---

## 🚀 Características principales

- **Frontend SPA**: React 18, React Router, Bootstrap 5, TailwindCSS, Axios.
- **Backend API REST**: Laravel 12, Sanctum, Spatie Permissions.
- **Autenticación**: Registro, login, logout, roles (admin/cliente), sincronización de estado.
- **Paneles diferenciados**: Público (empresas/categorías aprobadas), Admin (gestión total), Cliente (gestión propia, estado de publicación).
- **Validaciones**: Frontend (campos, formato, feedback visual) y backend (tipo, longitud, unicidad, seguridad).
- **Diseño moderno**: Navbar/Footer sticky, sidebars con íconos, cards, tablas y formularios responsivos.
- **Buenas prácticas**: Código limpio, feedback de errores, flujos de autenticación robustos, visibilidad controlada.

---

## 📦 Stack y dependencias

### Backend (Laravel)
- PHP >= 8.2
- Laravel 12
- laravel/sanctum
- spatie/laravel-permission

### Frontend (React)
- React 18
- React Router DOM 6
- Axios
- Bootstrap 5
- TailwindCSS 4
- Vite

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio
```powershell
git clone <REPO_URL>
cd diremp
```

### 2. Backend (Laravel)
```powershell
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### 3. Frontend (React + Vite)
```powershell
npm install
npm run dev
```

La app React se sirve en http://localhost:5173 y la API en http://localhost:8000 (no se usa http://localhost:5173).

---

## 📁 Estructura del proyecto

- `app/Http/Controllers/Api/` — Controladores API (auth, admin, cliente, público)
- `app/Models/` — Modelos Eloquent (Empresa, Categoria, User)
- `database/migrations/` — Migraciones de tablas
- `resources/js/` — SPA React (componentes, layouts, páginas)
- `routes/api.php` — Rutas de la API REST
- `public/` — Archivos públicos y assets

---

## 🛡️ Buenas prácticas implementadas

- **Validaciones**: Frontend y backend, feedback visual y mensajes claros.
- **Autenticación**: Estado sincronizado, flujos robustos, feedback inmediato.
- **Visibilidad**: Solo empresas/categorías aprobadas en frontend público; panel cliente muestra estado (aprobada/pendiente).
- **Diseño**: UI moderna, responsiva, accesible y profesional.
- **Código**: Separación de responsabilidades, uso de hooks, componentes reutilizables, control de errores.

---

## 📝 Uso y pruebas

- Accede a `/register` para crear un usuario cliente.
- Un admin puede aprobar empresas/categorías desde su panel.
- El panel cliente muestra el estado de publicación de sus empresas.
- El público solo ve empresas/categorías aprobadas.

---

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva feature'`)
4. Haz push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

---

**Desarrollado por Israel — 2025**

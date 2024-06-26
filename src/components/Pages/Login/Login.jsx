// src/components/Pages/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log('Email:', email, 'Password:', password);

    // Simulamos un inicio de sesión exitoso redirigiendo al inicio
    navigate('/Inicio');
  };

  return (
    <form className="flex items-center justify-center min-h-screen">
      <div className="shadow-md rounded px-8 pt-6 pb-8 custom-form-size text-white bg-[#020C2A]" style={{ width: '1020px', height: '542px' }}>
        <h2 className="text-3xl mb-6 text-center custom-header-size">
          Iniciar Sesión
        </h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email" style={{ width: '300px', height: '33px' }}>
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#0D1C49] text-[#949494]"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password" style={{ width: '300px', height: '33px' }}>
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-none rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-[#0D1C49] text-[#949494]"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="inline-flex items-center text-white relative">
            <input type="checkbox" className="form-checkbox appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-[#0D1C49] checked:border-transparent" />
            <span className="ml-2">Recordarme</span>
          </label>
          <a href="#" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="flex items-center justify-center mb-2">
          <button
            type="submit"
            className="bg-[#0165FF] hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Iniciar Sesión
          </button>
        </div>
        <div className="text-white text-sm text-center">
          ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:text-blue-800">Regístrate aquí</a>
        </div>
      </div>
    </form>
  );
};

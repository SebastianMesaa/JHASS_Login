// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/Logo3.png';
import { Nav } from '../../Nav/Nav';
import { NavRouterLink } from '../../NavRouterLink/NavRouterLink';

export const Header = () => {
  return (
    <header className="bg-[#EEEEEE] shadow-md mx-8 rounded-lg">
      <div className="container mx-auto flex items-center justify-between py-4 text-2xl">
        <div className="flex items-center">
          <img src={img1} alt="Logo" className="h-10 w-14" />
        </div>
        <Nav>
          <NavRouterLink routes={'/Inicio'} content={'Inicio'} />
        </Nav>
        <div>
          <Link to="/login">
            <button className="bg-blue-500 text-white text-xl rounded-lg px-3 py-1 hover:bg-[#0165FF]">
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

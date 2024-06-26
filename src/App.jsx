// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Pages/Home/Home';
import { Login } from './components/Pages/Login/Login';
import { Header } from './components/Layouts/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Inicio" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

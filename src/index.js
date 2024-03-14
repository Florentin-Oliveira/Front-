import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import CadastrarOS from './pages/CadastrarOS';
import ViewOS from './pages/ViewOS'; 
import CadastrarCliente from './pages/CadastrarCliente';
import ViewCliente from './pages/ViewCliente';

import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  width: 100%; 
  margin: 0 auto;
  background-image: url('./assets/image/Fundo.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroos" element={<CadastrarOS />} />
        <Route path="/viewos" element={<ViewOS />} />
        <Route path="/cadastrocliente" element={<CadastrarCliente />} />
        <Route path="/viewcliente" element={<ViewCliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

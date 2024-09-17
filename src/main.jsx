import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './screens/home/index';
import ProductDescription from './screens/productsDescription/index';  // Importar a página de descrição de produto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productsDescription/:id" element={<ProductDescription />} /> {/* Adicionar a rota */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

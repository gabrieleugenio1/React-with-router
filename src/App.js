import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import Home from './screens/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cadastrousuario' exact element={<Cadastro />} />
        <Route path='/' exact element={<Login />} />
        <Route path='/home' exact element={<Home />} />
      </Routes>
    </Router>   
    
  );
}

export default App;

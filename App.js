
import './Game.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

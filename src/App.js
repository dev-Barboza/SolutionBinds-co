import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages';
import PokemonPage from './pages/pokemonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/pokemon/:id'element={<PokemonPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Header } from './components/Header.js';
import { Poster } from './components/Poster.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Info } from './pages/Info.js';
import {API} from './components/Api.js';
import { Home } from './pages/Home.js';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<Info />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

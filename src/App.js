import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './sections/Header';
import Footer from './sections/Footer';
import './App.css';
import './styles.css';
import PHome from './pages/PHome';
import PWorks from './pages/PWorks';
import PContato from './pages/PContato';
import PResume from './pages/PResume';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PHome />} />
          <Route path="/projetos" element={<PWorks />} />
          <Route path="/contato" element={<PContato />} />
          <Route path="/Resume" element={<PResume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

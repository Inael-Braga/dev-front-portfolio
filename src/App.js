import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './sections/Header';
import Footer from './sections/Footer';
import './App.css';
import './styles.css';
import PHome from './pages/PHome';
import PContato from './pages/PContato';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PHome />} />
          <Route path="/contato" element={<PContato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

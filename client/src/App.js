import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavComp/Nav';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import LifeInsurance from './pages/LifeInsurance';
import Medicare from './pages/Medicare';
import FooterComp from './components/FooterComp/FooterComp';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/life-insurance' element={<LifeInsurance />} />
          <Route exact path='/medicare' element={<Medicare />} />
          <Route exact path='/contact-us' element={<Contact />} />
        </Routes>
        <FooterComp/>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavComp/Nav';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import LifeInsurance from './pages/LifeInsurance';
import Medicare from './pages/Medicare';
import FooterComp from './components/FooterComp/FooterComp';
import GetQuoteComp from './components/GetQuoteComp/GetQuoteComp';
import LifeQuoteComp from './components/QuoteComp/LifeQuoteComp';
import MedicareQuoteComp from './components/QuoteComp/MedicareQuoteComp';
import LifeTermView from './components/LifeInsuranceComp/LifeTermView';
import LifeFinalExpense from './components/LifeInsuranceComp/LifeFinalExpense';
import MedicareSup from './components/MedicareComp/MedicareSup';

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
          <Route exact path='/get-a-quote' element={<GetQuoteComp />} />
          <Route exact path='/life-insurance-quote' element={<LifeQuoteComp />} />
          <Route exact path='/medicare-quote' element={<MedicareQuoteComp />} />
          <Route exact path='/life-insurance/term-view' element={<LifeTermView />} />
          <Route exact path='/life-insurance/final-expense' element={<LifeFinalExpense />} />
          <Route exact path='/medicare/medicare-supplement' element={<MedicareSup />} />
        </Routes>
        <FooterComp/>
      </Router>
    </div>
  );
}

export default App;

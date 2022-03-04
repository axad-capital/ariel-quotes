import React from 'react';
import './homeComp.css';

import HealthInsurance from './healthinsurance.png';
import HealthCare from './healthcare.png';

import AIG from './aiglogo.png';
import GlobeLife from './globelifelogo.png';
import LFG from './lfglogo.png';
import LGWhite from './lgwhitelogo.png';
import MoO from './revcolor.png';
import PacificLife from './pacific.png';
import Protective from './protectivelogo.png';
import Prudential from './prudentiallogo.png';
import FAQ from './faq.png';

const HomeComp = () => {

  return (
    <div>

      <header className='home-header'>
        <div className='home-header-info'>
          <p >You're just a few steps away from finding out how much you could save.</p>
          <h1>OVER TWO MILLION FAMILIES TRUST ARIELQUOTE</h1>
          <h3>Life Insurance Starting at Under $1 a day.</h3>
          <button onClick={() => window.location.href = '/get-a-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
      </header>

      <div className='home-icons'>
        <section>
          <div className='card card-icons'>
            <img className='icons' src={AIG} alt="icon" />
          </div>
          <div className="card card-icons">
            <img className='icons' src={GlobeLife} alt="icon" />
          </div>
          <div className="card card-icons">
            <img className='icons' src={LFG} alt="icon" />
          </div>
          <div className="card card-icons">
            <img className='icons' src={LGWhite} alt="icon" />
          </div>
        </section>
        <section>
          <div className='card card-icons'>
            <img className='icons' src={MoO} alt="icon" />
          </div>
          <div className="card card-icons">
            <img className='icons' src={PacificLife} alt="icon" />
          </div>
          <div className="card card-icons">
            <img className='icons' src={Protective} alt="icon" />
          </div>
          <div className="card card-icons">
            <img className='icons' src={Prudential} alt="icon" />
          </div>
        </section>
      </div>

      <div className='we-can-help'>
        <h2>WE CAN HELP YOU WITH ALL OF YOUR INSURANCE NEEDS</h2>
        <p>In just minutes, we shop highly rated carriers to find you the best rate... for free!</p>
        <section className='we-can-help-cards'>
          <div onClick={() => window.location.href='/life-insurance-quote'} className='card'>
            <img src={HealthCare} alt="health care" />
            <br />
            <p>Life Insurance</p>
          </div>
          <div onClick={() => window.location.href='/medicare-quote'} className='card'>
            <img src={HealthInsurance} alt="health insurance" />
            <br />
            <p>Medicare Insurance</p>
          </div>
        </section>
      </div>

      <div className='shopping-saving'>
        <div className='shopping-saving-info'>
          <h3>WE DO THE SHOPPING.</h3>
          <h3>YOU DO THE SAVING.</h3>
          <p>Our process is simple, hassle-free and takes just minutes. We instantly shop and compare hundreds of options from highly rated, trusted insurance brands to find the best rates available for you.</p>
          <button onClick={() => window.location.href = '/get-a-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
      </div>

      <section className='faq'>
        <div className='faq-img-container'>
          <img className='faq-img' src={FAQ} alt="faq" />
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <div className='card'>
          <div className="card-header">
            <h4>+ Why should I shop through ArielQuote?</h4>
          </div>
          <div id='cards-body' className="card-body">
            <p>ArielQuote can be your one-stop for life, auto insurance, home insurance, Medicare insurance and more! Our difference is our passion to protect families—like yours—and match you with the best carrier for you. We can compare coverage and prices from multiple companies in the time it takes you to get a quote from one. We shop some of the most trusted insurance companies on your behalf, making the insurance buying process easy and convenient for you.</p>
          </div>
        </div>
        <div className='card'>
          <div className="card-header">
            <h4>+ Does ArielQuote provide free quotes?</h4>
          </div>
          <div id='cards-body' className="card-body">
            <p>Yes, the quote is always free at ArielQuote and there's never an obligation to purchase or enroll. To ensure you—the consumer—receives unbiased quotes and advice, our ArielQuote licensed sales agents are also not paid differently based on the carrier you choose. So although we receive a commission from the insurance company each time a policy is sold, we don't rank or present specific insurance companies based on compensation.</p>
          </div>
        </div>
        <div className='card'>
          <div className="card-header">
            <h4>+ What companies does ArielQuote represent?</h4>
          </div>
          <div id='cards-body' className="card-body">
            <p>SelectQuote represents more than 50 highly rated life, auto, home, and Medicare insurance carriers. See the full lists of carriers below:</p>
            <ul>
              <li>Life Insurance Companies</li>
              <li>Auto & Home Insurance Companies</li>
              <li>Medicare Insurance Companies</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomeComp
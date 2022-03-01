import React from 'react';
import './homeComp.css';

import HealthInsurance from './health-insurance.png';
import HealthCare from './healthcare.png';

import AIG from './AIG-logo.png';
import GlobeLife from './GlobeLife-logo.png';
import LFG from './LFG-logo.png';
import LGWhite from './LG-white-logo.png';
import MoO from './MoO_Horiz_white_rev_color.png';
import PacificLife from './PacificLife-logo-300x56-1.png';
import Protective from './Protective-logo.png';
import Prudential from './Prudential-logo.png';

const HomeComp = () => {
  return (
    <div>

      <header className='home-header'>
        <div className='home-header-info'>
          <p >You're just a few steps away from finding out how much you could save.</p>
          <h1>OVER TWO MILLION FAMILIES TRUST ARIELQUOTE</h1>
          <h3>Life Insurance Starting at Under $1 a day.</h3>
          <button className='free-quote-btn'>Get Your Free Quote</button>
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
          <div className='card'>
            <img src={HealthCare} alt="health care" />
            <br/>
            <p>Life Insurance</p>
          </div>
          <div className='card'>
            <img src={HealthInsurance} alt="health insurance" />
            <br/>
            <p>Medicare Insurance</p>
          </div>
        </section>
      </div>

      <div>
        {/* next photo link */}
        {/* https://www.arielquotes.com/wp-content/uploads/2021/09/FOOTERBG.jpg */}
      </div>

    </div>
  )
}

export default HomeComp
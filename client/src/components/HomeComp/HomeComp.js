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
          <div className='card'>
            <img src={AIG} alt="" />
          </div>
          <div className="card">
            <img src={GlobeLife} alt="" />
          </div>
          <div className="card">
            <img src={LFG} alt="" />
          </div>
          <div className="card">
            <img src={LGWhite} alt="" />
          </div>
        </section>
        <section>
          <div className='card'>
            <img src={MoO} alt="" />
          </div>
          <div className="card">
            <img src={PacificLife} alt="" />
          </div>
          <div className="card">
            <img src={Protective} alt="" />
          </div>
          <div className="card">
            <img src={Prudential} alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomeComp
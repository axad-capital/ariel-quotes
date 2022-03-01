import React from 'react';
import './lifeInsuranceComp.css';

import LifeBG from './lifeinusrancebg56.jpg';

const LifeOverView = () => {
  return (
    <div>
      <div className='life-container'>
        <div className='life-container-info'>
          <h2>We Shop. You Save!</h2>
          <p>Trust One of Best Term Life sales agency to find you the best policy at the right price.</p>
          <button onClick={() => window.location.href = '/get-a-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
        <img src={LifeBG} alt="life insurance" />
      </div>
    </div>
  )
}

export default LifeOverView
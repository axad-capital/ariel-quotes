import React from 'react';
import './footerComp.css';
import {Link} from 'react-router-dom'

const FooterComp = () => {
  return (
    <div className='main-footer'>
        <div className="footer-container">
          <div>
            <h3>Products</h3>
            <div className='line'></div>
            <p><Link to='/life-insurance'>Life Insurance</Link></p>
            <p><Link to='/medicare'>Medicare</Link></p>
          </div>
          <div>
            <h3>Support</h3>
            <div className='line'></div>
            <p><Link to='/'>FAQ's</Link></p>
            <p><Link to='/licensing'>Licensing</Link></p>
            <p><Link to='/contact-us'>Contact Us</Link></p>
            <p><Link to='/get-a-quote'>Get A Quote</Link></p>
          </div>
          <div>
            <h3>Give Us A Call</h3>
            <div className='line'></div>
            <p>For Medicare: 9999999999</p>
            <p>for Life Insurance: 9999999999</p>
          </div>
        </div>
    </div>
  )
}

export default FooterComp
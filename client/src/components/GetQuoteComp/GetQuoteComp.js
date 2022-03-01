import React from 'react';
import './getQuoteComp.css';
import HealthInsurance from '../HomeComp/health-insurance.png';
import HealthCare from '../HomeComp/healthcare.png';

const GetQuoteComp = () => {
    return (
        <div>
            <div className='we-can-help'>
                <h2>SELECT THE QUOTE YOU'RE LOOKING FOR</h2>
                <p>Looking for the right plan for your life, auto, home or medicare insurance needs? We can help! ArielQuote shops a select group of trusted companies on your behalf to potentially save you time and money.</p>
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
        </div>
    )
}

export default GetQuoteComp
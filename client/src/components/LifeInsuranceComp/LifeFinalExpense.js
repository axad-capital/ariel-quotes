import React from 'react';
import './styles/lifeFinalExpense.css';

const LifeFinalExpense = () => {
    return (
        <div>
            <div className='final-header'>
                <div>
                    <h1>Give Your Family Peace of Mind.</h1>
                    <p>Let ArielQuote help you navigate final expense insurance and why it's so important for you and your family</p>
                    <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </div>
        </div>
    )
}

export default LifeFinalExpense
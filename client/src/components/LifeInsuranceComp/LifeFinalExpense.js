import React from 'react';
import './lifeFinalExpense.css';
import Couple from './couple.jpg';

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

            <div className='final-main-info-container'>
                <div className='final-expense-top'>
                    <div className='card final-top-info'>
                        <h2>Final Expense Insurance</h2>
                        <p>Thinking about final expenses can be difficult, but it's important to plan for you and your family's future. ArielQuote is here to help you understand the benefits of final expense insurance and find the right coverage for you and your family.</p>
                    </div>
                    <div className='couple-img'>
                        <img src={Couple} alt="couple reasearching" />
                    </div>
                </div>

                <div className='final-expense-bottom'>
                    <div className=' card final-bottom-info'>
                        <h2>What Is Final Expense Insurance?</h2>
                        <p>Final expense insurance—also known as burial insurance—is one of the most thoughtful gifts you can give your loved ones. Final expense insurance helps cover your end-of-life costs, including funeral expenses, credit card debt, medical bills and any other debt you don't want to pass on to your family. After debts are covered, any remaining funds can be used how your loved ones see most fit.</p>
                    </div>
                    <div className=' card final-bottom-info'>
                        <h2>How Much Is Final Expense Insurance?</h2>
                        <p>The cost of final expense insurance depends on how much security you want to leave your loved ones. Funeral insurance plans provide coverage from $1,000 to $40,000 at premiums that might surprise you.</p>
                        <p>When thinking about the amount of coverage that's right for you, consider that the average cost of a funeral these days is $10,000 and on the rise.</p>
                    </div>
                </div>
            </div>

            <div className='everyone-top-container'>
                <div className='everyone-top'>
                    <h2>Final Expense Insurance Is For Everyone</h2>
                    <p>Even if you are older or have an illness, you can obtain burial insurance at a reasonable price. No medical exam is required in many cases; only a health questionnaire to help determine your coverage plan and premium. Once you've selected your coverage plan, your premium never increases. Even if your health decreases.</p>
                    <p>Burial insurance is advisable even if you have traditional life insurance or savings. The additional coverage affords you an assurance that your beneficiaries will be able to take care of your final expenses.</p>
                </div>
            </div>
            <div className="everyone-bottom-container">
                <div className='everyone-bottom'>
                    <h2>Plan For Your Future Today</h2>
                    <p>Thinking about final expenses can be difficult and overwhelming—let us help. Call today to speak with a licensed sales agent. Our service is free and no additional cost is passed on to you. In just a few minutes, we can help you shop our trusted carriers to find the best plan for you.</p>
                <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </div>
        </div>
    )
}

export default LifeFinalExpense
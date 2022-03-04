import React from 'react';
import './lifeTermView.css';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import GiteIcon from '@mui/icons-material/Gite';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Term from './term.jpg'

const LifeTermView = () => {
    return (
        <div>
            <div className='term-header-container'>
                <div className='term-header-img'>
                    <img src={Term} alt="term" />
                </div>
                <div className="term-header-info">
                    <h1>Why Wait To Protect Your Family?</h1>
                    <p>In just minutes, we can help you find the right amount of coverage at a price that works for you.</p>
                    <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </div>

            <div className='what-is-term-container'>
                <div className='what-is-term-info'>
                    <h2>What Is Term Life Insurance</h2>
                    <p>Life insurance, specifically term life insurance, is the most affordable way to protect your family's financial security if something were to happen to you. It gets its name from your option to choose the “term” or length and only buy it for as long as you need it. Typically, the length of term options are 10, 15, 20, 25 or 30 years.</p>
                    <p>While term life insurance doesn't build up a cash value like permanent (also known as whole) life insurance, it's an especially smart and inexpensive way to gain peace of mind during the years when you're building a nest egg for retirement, paying off a home mortgage or putting away funds for your child's college tuition.</p>
                    <p>Learn more about what term life insurance is.</p>
                    <p>Ready to get a free term life insurance quote? We can compare coverage and rates from some of the most trusted insurance companies in just minutes.</p>
                    <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </div>

            <div className='learn-more-term-container'>
                <h4>Learn more about the many benefits and key features of <span>Term Life Insurance</span></h4>
                <section className='term-icon-container'>
                    <div className='term-column'>
                        <div>
                            <ContentPasteGoIcon className='red' />
                            <div>
                                <h6>Multiple Term Lengths</h6>
                                <p>Term life insurance provides coverage for a specific period of time, generally between 10 and 30 years.</p>
                            </div>
                        </div>

                        <div>
                            <LocalHospitalIcon className='red' />
                            <div>
                                <h6>Pre-Existing Condition-Friendly</h6>
                                <p>We partner with several carriers who are more likely to approve term life insurance for cancer survivors, individuals with diabetes and people who take medications for cholesterol, blood pressure and other conditions. In such cases, we're able to shop on your behalf for the most affordable premiums for you.</p>
                            </div>
                        </div>

                        <div>
                            <PaymentIcon className='red' />
                            <div>
                                <h6>Flexible Playment Options</h6>
                                <p>As the policyholder, you have the option to pay a monthly, quarterly, semi-annual or annual premium for the length of your term period—you can often get a discount for paying annually.</p>
                            </div>
                        </div>
                    </div>

                    <div className='term-column'>
                        <div>
                            <PaymentsIcon className='red' />
                            <div>
                                <h6>Most Affordable</h6>
                                <p>Most people between the ages of 18 and 75 can buy term life insurance. Premium costs are based on several different factors including health and age.</p>
                            </div>
                        </div>
                        <div>
                            <GiteIcon className='red' />
                            <div>
                                <h6>Tax-Free</h6>
                                <p>If you should pass away while the policy is active, your beneficiaries will receive the benefit for the full amount of your policy (generally in a lump sum or as an annuity). In most cases, these proceeds are tax-free, but if taken in installments, potential interest could be taxable.</p>
                            </div>
                        </div>
                        <div>
                            <AssignmentIcon className='red' />
                            <div>
                                <h6>Fixed Premiums</h6>
                                <p>Your policy remains active for the length of that period as long as you pay your premiums, and typically, your policy will be “guaranteed level,” which means your monthly premium amount never changes.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='term-footer'>
                    <h5>What Is Term Life Insurance? The Easiest Way To Find The Best Life Insurance And To Receive A Term Life Insurance Quote Is To Let Us Shop More Than 10 Carriers For You In Just Minutes.</h5>
                    <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </div>
        </div>
    )
}

export default LifeTermView
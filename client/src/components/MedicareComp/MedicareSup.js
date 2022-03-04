import React from 'react';
import './medicareSup.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import MedCost from './oldpeople.jpg';

const MedicareSup = () => {
    return (
        <div>
            <header className='med-sup-header'>
                <div className='med-sup-header-info'>
                    <h1>Is A Medicare Supplement Plan Right For You?</h1>
                    <p>At ArielQuotes, we can help find the right Medicare Supplement plan for you, so you can get back to what you really love. There's no obligation to enroll.</p>
                    <button onClick={() => window.location.href = '/medicare-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </header>

            <section className='med-sup-what-is-container'>
                <div className='med-sup-what-is-top'>
                    <h2><LocalHospitalIcon className='red' />What Is A Medicare Supplement Plan?</h2>
                    <p>Medicare Supplement plans help cover gaps in coverage from Medicare Part A and Part B. Medicare Supplement plans are also known as Medigap insurance. If you have fairly frequent doctor or hospital visits, Medicare Parts A and B (Original Medicare) come with out-of-pocket costs. Medigap helps to fill in these gaps with basic benefits, such as deductibles, coinsurance and copayments. The monthly premium cost can vary depending on the type of Medigap coverage, but the premium cost is typically offset by lower annual out-of-pocket costs for healthcare services.</p>
                </div>
                <br />
                <br />
                <div className='med-sup-what-is-bottom'>
                    <h2><HealingIcon className='red' />Compare Medicare Supplement Plans (Medigap)</h2>
                    <p>In most states, there are eight Medicare Supplement plans to choose from and all policies have been standardized. That means there is no difference in the benefits offered between Medicare Supplement insurers. The only difference between Medigap plans tends to be the cost of the monthly premium. Medicare Supplement insurance plans are denoted by the letters A through N (plans C, E, F, H, I and J are no longer sold). Although the names of some of the Medicare Supplement plans sound familiar to the parts of Medicare, such as Part A and Part B, they are not the same.</p>
                    <h6>Is A Medicare Supplement Plan Worth It?</h6>
                    <p>For many, it's worth considering a Medicare Supplement plan because it can help ease the burden of out-of-pocket costs that aren't covered with Original Medicare. At ArielQuote, we can help you compare Medicare Supplement Plans to ensure you're finding the one that's right for you and your needs.</p>
                </div>
            </section>

            <div className='med-sup-benefits'>
                <div className='med-sup-benefits-info'>
                    <h2>Benefits Of A Medigap Plan</h2>
                    <p>Each of the eight Medigap plans provide a different level of benefits, but all plans must cover at least a portion of the following basic benefits:</p>
                    <ul>
                        <li>Medicare Part A coinsurance costs up to an additional 365 days after Medicare benefits are exhausted</li>
                        <li>Medicare Part B hospice care coinsurance and copayments</li>
                        <li>Medicare Part B coinsurance or copayments</li>
                        <li>First three pints of blood used in a medical procedure</li>
                    </ul>
                    <p>Some Medicare Supplement plans include additional basic benefits, such as Plan G, which is the most comprehensive standardized Medigap insurance plan available.</p>
                    <p>Another important feature of a Medigap plan is that you can see any doctor accepting Medicare, whether the doctor accepts assignment Medicare or not. If your doctor accepts an assignment, this means they agree to be paid the Medicare approved amount for the care you received and your Medigap insurance company will usually pay the doctor directly. If your doctor does not accept Medicare assignment and still accepts Medicare, you may have to send the claims to your insurance company and pay the doctor yourself.</p>
                </div>
            </div>

            <div className='consider-container'>
                <div className='consider-info'>
                    <h2>Things to Consider Before Enrolling In A Medigap Plan</h2>
                    <p>As you prepare to sign up for a Medicare Supplement plan it is important to remember the following:</p>
                    <div className='consider-info-categories'>
                        <div>
                            <h6>Medicare Supplement Plan Requirements And Limitations</h6>
                            <ul>
                                <li>You must have Medicare Part A and B in order to buy a Medicare Supplement or Medigap policy.</li>
                                <li>A Medicare Supplement policy can only cover one individual. If you and your spouse both want Medigap coverage, you will each need a separate policy.</li>
                                <li>Prescription drugs are not covered by Medicare Supplement or Medigap policies. If you find a supplement plan that works for you, you can buy a Medicare Prescription Drug Part D plan for your prescription medication needs.</li>
                                <li>Medigap policies generally do not cover vision or dental care, hearing aids, eyeglasses, long-term care or private nursing.</li>
                                <li>Not all plans may be available in every state.</li>
                                <li>Medicare Supplement and Medicare Advantage (Part C) are different types of plans.</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Medicare Supplement Insurance Coverage</h6>
                            <ul>
                                <li>You are eligible to purchase a Medicare Supplement policy (Medigap) on the first day of the month in which you turn 65. You must already be enrolled in Medicare A and B. During this time, you can buy any Medigap policy sold in your state, even if you have health problems.</li>
                                <li>The most popular Medicare Supplement plans are Plan G and Plan N.</li>
                                <li>Plan G is considered to provide the broadest medicare supplement coverage and covers all the gaps left by Medicare Parts A and B.</li>
                                <li>You pay the private insurance company a monthly premium for your Medicare Supplement policy. This cost is in addition to the cost you pay for your Medicare Part B premium.</li>
                                <li>Any standardized Medigap policy is guaranteed to renew each year, even if you have health problems. This means the insurance company cannot cancel your Medicare Supplement policy as long as you pay the premium.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sup-cost-container'>
                <div>
                    <h4>The Cost Of A Medicare Supplement Plan</h4>
                    <p>If you apply for a Medicare Supplement plan, you will pay a monthly premium to the insurance company in addition to your Medicare Part B premium. Medicare Supplement plan costs depend on a number of factors, including the type of plan you buy, the insurance company, your location and your age. Premiums vary among insurance companies, but the benefits of each standard Medigap plan is always the same. For instance, a Medigap Plan C policy offers the same benefits no matter which company you buy it from. At ArielQuote, we can walk you step-by-step through the comparing and shopping process to find the Medicare Supplement plan that's right for you. Save yourself time and let us do the comparing—there's no obligation to enroll.</p>
                    <button onClick={() => window.location.href = '/medicare-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
                <div>
                    <img className='old-people' src={MedCost} alt="couple on ipad" />
                </div>
            </div>

        </div>
    )
}

export default MedicareSup
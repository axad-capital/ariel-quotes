import React from 'react';
import './medicareAdvantage.css';

const MedicareAdvantage = () => {
    return (
        <div>
            <div className="med-adv-header">
                <div className='med-adv-header-info'>
                    <h1>Get More From A Medicare Advantage Plan.</h1>
                    <p>An alternative to Original Medicare, Medicare Advantage plans can be beneficial to many. Let ArielQuote help you figure out if it would be a good fit for you. There's no obligation to enroll.</p>
                    <button onClick={() => window.location.href = '/medicare-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </div>

            <div className='adv-what-is'>
                <h3>What Is A Medicare Advantage Plan?</h3>
                <p>Medicare Advantage plans provide an alternative to Original Medicare (Part A and Part B). Medicare Advantage is also known as Medicare Part C. Offered by private health insurance companies that are approved by Medicare, Medicare Advantage plans are legally required to offer at least the same benefits as Original Medicare, but often include additional coverage, such as routine vision or dental benefits, prescription drugs or health wellness programs.</p>
            </div>

            <div className='adv-compare'>
                <h3>Compare Medicare Advantage Plans</h3>
                <p className='bold'>When you sign up for a Medicare Advantage plan—like a Humana Medicare Advantage plan or a Aetna Medicare Advantage plan—you'll want to consider the different plan types to ensure you have all the health coverage you need. Medicare Advantage plan companies provide six different types of plans:</p>
                <br />
                <ol>
                    <li>Health Maintenance Organization (HMO)</li>
                    <li>Preferred Provider Organization (PPO)</li>
                    <li>Health Maintenance Organization Point of Service (HMOPOS)</li>
                    <li>Private Fee-For-Service (PFFS)</li>
                    <li>Medical Savings Account (MSA)</li>
                    <li>Special Needs Plan (SNP)</li>
                </ol>
                <br />
                <p className='bold pink'>Note that not all of these plans are available in all areas. You'll also need your own primary care doctor when you have one of the following plans:</p>
                <br />
                <ul>
                    <li>Special Needs Plan (SNP)</li>
                    <li>Health Maintenance Organization (HMO)</li>
                    <li>Health Maintenance Organization Point of Service (HMOPOS) plan</li>
                    <p>HMOs and SNPs are the only plans that require a referral to see a specialist. HMO plans are also the only plan you're required to receive care from an in-network doctor.</p>
                </ul>
                <br />
                <h5>Medicare Advantage Plans by the Numbers</h5>
                <p>According to the Centers for Medicare and Medicaid Services, these are the most popular plans and carriers across the U.S.. However, popularity is not the best metric for determining the right Medicare Advantage plan for your needs. ArielQuotes specializes in finding you the right coverage with the right carrier at the right price for you.</p>
            </div>

            <div className="adv-card-container">
                <div className='adv-card'>
                    <div>
                        <p>PLAN TYPE</p>
                        <p>CARRIER</p>

                    </div>
                    <div>
                        ENROLLED
                    </div>
                </div>
                <div className='adv-card'>
                    <div>
                        <p>HMO/HMOPOS</p>
                        <p>United Healthcare</p>
                    </div>
                    <div>
                        3,424,592
                    </div>
                </div>
                <div className='adv-card'>
                    <div>
                        <p>HMO/HMOPOS</p>
                        <p>Humana</p>
                    </div>
                    <div>
                        2,136,113
                    </div>
                </div>
                <div className='adv-card'>
                    <div>
                        <p>Local PPO</p>
                        <p>United Healthcare</p>
                    </div>
                    <div>
                        2,028,526
                    </div>
                </div>
                <div className='adv-card'>
                    <div>
                        <p>Local PPO</p>
                        <p>Aetna Medicare</p>
                    </div>
                    <div>
                        2,022,382
                    </div>
                </div>
                <div className='adv-card'>
                    <div>
                        <p>Local PPO</p>
                        <p>Humana</p>
                    </div>
                    <div>
                        1,812,413
                    </div>
                </div>
                <div className='adv-card'>
                    <div>
                        <p>HMO/HMOPOS</p>
                        <p>Kaiser Permanente</p>
                    </div>
                    <div>
                        1,576,210
                    </div>
                </div>
            </div>

            <div className='adv-benefits-container'>
                <div className='adv-benefits-info'>
                    <h2>Benefits Of A Medicare Advantage Plan:</h2>
                    <ul>
                        <li>$0/month premium plans and $0/month deductible plans may be available in your area</li>
                        <li>Prescription drug coverage may be included</li>
                        <li>Additional benefits, such as routine vision, hearing and dental may be available</li>
                        <li>Gym memberships may be included</li>
                    </ul>
                    <h5>Is a Medicare Advantage plan worth it?</h5>
                    <p>Medicare Advantage plans often include additional coverage—think dental, vision, hearing, prescription drug coverage and more—at a favorable cost. Medicare Advantage plans (also known as Medicare Part C plans) can potentially help keep your costs down while ensuring you have all the benefits you deserve. Compare Medicare Advantage plans with ArielQuote today to see what coverage options are available to you. The service is free and there's never an obligation to enroll.</p>
                </div>
            </div>

            <div className="what-consider-container">
                <h2>What To Consider Before Enrolling In A Medicare Advantage Plan</h2>
                <p className="pink">As you prepare to apply for a Medicare Advantage plan, it is important to remember:</p>
                <ul>
                    <li>With the exception of the Medical Savings Account (MSA) plan, most Medicare Advantage plans include prescription drug coverage.</li>
                    <li>You cannot purchase a stand-alone Medicare Part D plan if you have a Health Maintenance Organization (HMO) or Preferred Provider Organization (PPO) Medicare Advantage plan, therefore it's crucial to choose a HMO or PPO plan that includes prescription drug coverage.</li>
                    <li>Special Needs Plans (SNP) are required to cover prescriptions. Private Fee-For-Service (PFFS) plans sometimes cover prescriptions, but if you have one that doesn't, you can supplement it with a Medicare Part D plan.</li>
                    <li>The services and fees for Medicare Advantage plans can vary widely, but we can help you better understand the plans available in your area. Learn more by downloading our Free Medicare Advantage Guide.</li>
                </ul>
                <br />
                <h5 className='pink'>Medicare Advantage Plan Enrollment</h5>
                <p>The best time to enroll in a Medicare Advantage plan is during the Medicare Annual Enrollment Period (AEP) which takes place every year from October 15 - December 7. This is the one time each year that all Medicare beneficiaries can review their current coverage and make changes. Medicare plan benefits and prescription drug coverage change every year, making it imperative to review your coverage on an annual basis.</p>
                <p>Individuals with Medicare Advantage plans can also make a one-time plan change during the Medicare Advantage Open Enrollment Period (OEP) which takes place from January 1 - March 31 every year.</p>
            </div>

            <div className='adv-cost-container'>
                <div className='adv-cost-info'>
                    <h1>Cost Of Medicare Advantage Plans</h1>
                    <p>Not only do Medicare Advantage plans have extra benefits, but they are typically very affordable. If you enroll in an Medicare Advantage plan, you will continue to pay for your Medicare Part B premium as well as the cost of the Medicare Advantage plan, but many Medicare Advantage plans have premiums as low as $0/month.</p>
                    <p>Since Medicare Advantage plans are typically managed care and have networks of health care providers—such as a Health Maintenance Organization (HMO)—it's important for you to stay in your network, otherwise your plan may not cover your medical expenses or your costs may not apply to your out-of-pocket maximum.</p>
                    <button onClick={() => window.location.href = '/medicare-quote'} className='free-quote-btn'>Get Your Free Quote</button>
                </div>
            </div>

        </div>
    )
}

export default MedicareAdvantage
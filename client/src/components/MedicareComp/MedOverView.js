import React from 'react';
import './medicareComp.css';

import LGLogo from './legalglogo.png';
import ALogo from './amlogo.png';
import TrueLogo from './trulogo.png';
import Clip from './clipb.png'
import Umbrella from './umbrella.png'

const MedOverView = () => {
  return (
    <div>
      <header className='med-header'>
        <div className='med-header-info'>
          <h1>Find Affordable Medicare Plans In Your Area.</h1>
          <p>$0 monthly premium Medicare Advantage plans may be available in your state.</p>
          <button onClick={() => window.location.href = '/medicare-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
      </header>

      <div className='med-logo-container'>
        <img src={ALogo} alt="A logo" />
        <img src={TrueLogo} alt="true logo" />
        <img src={LGLogo} alt="lg Logo" />
      </div>

      <div className='med-sup-adv'>
        <div onClick={() => window.location.href = '/medicare-quote'} className='card med-sup-adv-info'>
          <h6>Get A Free Quote</h6>
          <img src={Umbrella} alt="umbrella" />
          <h4>Medicare Supplement Insurance</h4>
          <p>Original Medicare covers the majority of medical expenses, but not everything. A Medicare Supplement Insurance plan can help pay for the out-of-pocket costs not covered by Medicare, such as copays, deductibles and coinsurance.</p>
        </div>
        <div onClick={() => window.location.href = '/medicare-quote'} className='card med-sup-adv-info'>
          <h6>Get A Free Quote</h6>
          <img src={Clip} alt='clip'></img>
          <h4>Medicare Advantage Insurance</h4>
          <p>Medicare Advantage (MA) plans provide an alternative to Original Medicare and are offered by private health insurance companies approved by Medicare. With MA, you may be able to get $0 premium plan and $0 deductible as well as having prescription drug coverage and other benefits related to vision, dental and hearing.</p>
        </div>
      </div>

      <div className='med-testimonial oldbg'>
        <div className='med-testimonial-info'>
          <h3>Our Customers Say We're Excellent!</h3>
          <p className='testimonial-quote'>"Very organized, thorough, knowledgeable agents and great feedback and support throughout the process."</p>
          <p>Jean</p>
        </div>
      </div>

      <div className='med-sup-adv'>
        <div onClick={() => window.location.href = '/medicare-quote'} className='card med-sup-adv-info'>
          <h6>Get A Free Quote</h6>
          <h4>Understand Your Medicare Options With Help From Your ArielQuote Team.</h4>
          <p>Medicare insurance can be confusing. If you've tried to research Medicare options on your own, you may have found it difficult to compare how policies and rates stack up. Turn to SelectQuote to help you decide what kind of Medicare plan you need. Our licensed sales agents are here to listen to your needs to find the right Medicare plan for you.</p>
        </div>

        <div>
          {/* need to create tesitmonials */}
        </div>
      </div>


      <div className='med-testimonial'>
        <div className='which-med'>
          <h2>Which Medicare Option Works For You?</h2>
          <p className='testimonial-quote'>Original Medicare, known as Medicare Part A and Part B covers many hospital and medical benefits, but it doesn't cover everything. And, we know how expensive deductibles and copayments can get. Adding a Medicare Supplement Insurance plan, also known as Medigap insurance, can help bridge the gaps in Original Medicare coverage and may help save you money each month.For some, a Medicare Advantage plan is the way to go. Medicare Advantage plans (also known as Medicare Part C) work in place of Medicare Part A and Part B, and some plans may also include prescription drug coverage along with vision, dental and hearing benefits. Plans vary so check with your SelectQuote licensed sales agent.SelectQuote can help you determine if Original Medicare and a Medicare Supplement Insurance plan, or Medicare Advantage plan is the right plan for you.</p>
          <button onClick={() => window.location.href = '/medicare-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
      </div>

    </div >
  )
}

export default MedOverView
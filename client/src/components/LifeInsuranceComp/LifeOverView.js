import React from 'react';
import './lifeInsuranceComp.css'

// import WILI from './wili.jpg';
// import LifeBG from './lifeinusrancebg.jpg';
// import ProgressBar from './progressbar.png'

const LifeOverView = () => {
  return (
    <div>
      <div className='life-container'>
        <div className='life-container-info'>
          <h2>We Shop. You Save!</h2>
          <p>Trust One of Best Term Life sales agency to find you the best policy at the right price.</p>
          <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
        {/* <img src={LifeBG} alt="life insurance" /> */}
      </div>

      <div className='what-is-container'>
        <div className='what-is'>
          <h2>What is Life Insurance?</h2>
          {/* <img src={WILI} alt="what is life insurance" /> */}
          <p>In simple terms, <span>life insurance is an affordable way to protect your family financially</span> in the event you're not there to take care of them. Life insurance can help with things like paying the mortgage, college tuition, final expenses and more.</p>
          <p>Figuring out what life insurance is right for you can seem complicated, but that's what we're here for. ArielQuotes life insurance agents have the answers you need to make the right decision for you and your family.</p>
        </div>

        <div className='how-much'>
          <h2>How Much <span>Life Insurance</span> Do I Need?</h2>
          <p>How much life insurance (and what kind of insurance) needed varies from person-to-person. Our life insurance agents can help you figure out what coverage is best for you and your family - be it term life insurance, whole life insurance, or another policy altogether. Call a ArielQuotes agent today to learn more about your options.</p>
          <br />
          <br />
          <h2>How It Works.</h2>
          <p>Researching and gathering life insurance quotes can be a long, complex process, but ArielQuotes breakthrough technology makes it quick and easy. Within minutes, an agent can give you unbiased price comparisons from 10+ trusted insurance companies.</p>
          <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
      </div>

      <div className='different-types'>
        <div className='different-types-info'>
          <h2>What Are The Different Types Of Life Insurance?</h2>
          <p>There are several different types of life insurance policies available and most fall under two main categories: <span>Term life insurance</span> and <span>Permanent life insurance</span>. Take a look at some different types to see which might be the best coverage for you.</p>
          <ul>
            <li>✔️ Term life insurance</li>
            <li>✔️ Permanent life insurance</li>
            <li>✔️ Universal life insurance</li>
            <li>✔️ Whole life insurance</li>
            <li>✔️ Final expenses</li>
          </ul>
          <button onClick={() => window.location.href = '/life-insurance-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
      </div>

      <div className='testimonial-container'>
        <div className='testimonial'>
          <h1>Our Customers Say We're Excellent!</h1>
          <p>“Very organized, thorough, knowledgeable agents and great feedback and support throughout the process.”</p>
          <p>Peter</p>
        </div>
      </div>

      <div className='you-can-save'>
        <div className="you-can-save-info">
          {/* <img src={ProgressBar} alt="progress bar" /> */}
          <p>You're just a few steps away from finding out how much</p>
          <h4>YOU CAN SAVE!</h4>
          <button onClick={() => window.location.href = '/get-a-quote'} className='free-quote-btn'>Get Your Free Quote</button>
        </div>
      </div>
    </div>
  )
}

export default LifeOverView
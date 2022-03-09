import React from 'react';
import './contactComp.css';

const ContactComp = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-text">
          <h1>Get In Touch With ArielQuote</h1>
          <p>Whether you have a general question or are looking for more information, we can help. You can contact us by using the information below.</p>
        </div>
      </div>

      <div className='contact-info-container'>
        <h4 className='pink'>MEDICARE INSURANCE</h4>
        <p>&</p>
        <h4 className='blue'>LIFE INSURANCE</h4>
        <br />
        <div className='contact-info'>
          <div>
            <h5>Get A Free Quote</h5>
            <p>No obligation to enroll</p>
            <p>1-888-250-3820</p>
          </div>
          <div>
            <h5>General Inquiry</h5>
            <p>1-888-25099999</p>
          </div>
          <div>
            <h5>Have A Policy?</h5>
            <p>1-888-25099999</p>
          </div>
          <div>
            <h5>Have An Application Pending?</h5>
            <p>1-888-25099999</p>
            <p>Licensed Sales Agent</p>
          </div>
          <div>
            <h5>Email Us</h5>
            <p>medicare@arielquotes.com</p>
          </div>
        </div>
      </div>

      <div className='contact-foot'>
        <h5>Comments, Ideas Or Questions?</h5>
        <p>We're always striving to do better. If something wasn't 100% to your satisfaction we want to know. At the same time, we don't mind hearing what we did to exceed your expectations, too. Contact us at clientservices@arielquotes.com.</p>
        <h5>Media Relations Questions?</h5>
        <p>For media relations questions, please email us at media@arielquotes.com.</p>
      </div>
    </div>
  )
}

export default ContactComp
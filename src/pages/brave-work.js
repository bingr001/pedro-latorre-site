import React from 'react'
import { Link } from 'gatsby'


import Footer from '../components/Footer'
//import Subscription from '../components/Subscription'



const BraveWork = () => (
    <div>
    <h1>Brave Work</h1>
    <p>Brave Work information</p>
    <form name="contactsample" method="POST" data-netlify="true">
            <input type="hidden" name="contactsample" value="contact" />
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
            </div>
            <div className="field">
              <div 
              data-netlify-recaptcha="true"></div>
            </div>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="button primary" /></li>
          </ul>
			</form>
      </div>
)

export default BraveWork

import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Footer from '../components/Footer'
//import Subscription from '../components/Subscription'



const BraveWork = () => (
  <Layout>
    <h1>Brave Work</h1>
    <p>Brave Work information</p>
    <form name="contactsample" method="POST" data-netlify="true">
            <input type="hidden" name="contactsample" value="contact" />
          <div class="fields">
            <div class="field half">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div class="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div class="field">
              <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
            </div>
            <div class="field">
              <div 
              data-netlify-recaptcha="true"></div>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Send Message" class="button primary" /></li>
          </ul>
			</form>
  </Layout>
)

export default BraveWork

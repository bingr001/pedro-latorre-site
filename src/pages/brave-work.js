import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Footer from '../components/Footer'
//import Subscription from '../components/Subscription'



const BraveWork = () => (
  <Layout>
    <h1>Brave Work</h1>
    <p>Brave Work information</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer/>
    <form name="contact 5" method="POST" data-netlify="true">
    <input type="hidden" name="contactsample" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div class="field">
				    <div 
					  data-netlify-recaptcha="true"></div>
				</div>
        <p>
          <button type="submit">Send</button>
        </p>
    </form>
  </Layout>
)

export default BraveWork

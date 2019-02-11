import React from 'react'

import Footer from '../components/Footer'
//import Subscription from '../components/Subscription'



const BraveWork = () => (
<div>
      <h1>Brave Work</h1>
      <p>Brave Work information</p>
      <form name="contact2" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="contact2" value="contact2" />
        <h2>Request More Info</h2>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
            <label>Your Phone Number: <input type="text" name="phone"/> </label>
        </p>
        <p>
            <label>Church Website: <input type="text" name="website"/> </label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
</div>
)

export default BraveWork

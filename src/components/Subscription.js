import React from 'react'

const Subscription = (props) => (
<form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
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
    <button type="submit" value="Send Message" >Send</button>
  </p>
</form>
)


export default Subscription

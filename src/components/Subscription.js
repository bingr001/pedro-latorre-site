import React from 'react'

const Subscription = (props) => (
<form name="brave work contact" 
      method="post" 
      data-netlify-honeypot="bot-field">
  <h2>Request More Info</h2>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>

  <p>
    <label>Message: <textarea name="message"></textarea></label>

    <button type="submit" value="Send Message" >Send</button>
  </p>
</form>
)


export default Subscription
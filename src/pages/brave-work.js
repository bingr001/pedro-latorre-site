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
  </Layout>
)

export default BraveWork

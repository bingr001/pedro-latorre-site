import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Footer from '../components/Footer'
import Subscription from '../components/Subscription'



const BraveWork = () => (
  <Layout>
    <h1>Brave Work</h1>
    <p>Brave Work information</p>
    <Link to="/">Go back to the homepage</Link>
    <Subscription/> 
    <Footer/>
  </Layout>
)

export default BraveWork

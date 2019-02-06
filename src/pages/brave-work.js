import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/Footer'


const BraveWork = () => (
  <Layout>
    <h1>Brave Work</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer/>

  </Layout>
)

export default BraveWork

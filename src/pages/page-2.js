import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Subscription from '../components/Subscription'


const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <Link to="/">Go back to the homepage</Link>
    <div class="iframe-container">
       <iframe src="https://player.vimeo.com/video/316497942"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <Subscription/>
  </Layout>
)

export default SecondPage

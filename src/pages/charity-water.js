import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import Subscription from '../components/Subscription'
import Testimonial from '../components/Testimonial'
import Results from '../components/Results'

//      <div id="bg"></div>
const BraveWork = () => (
  <div id="backg">
    <Layout>
      <Helmet>
        <title>Book Pedro | charity: water speaker</title>
        <meta name="description" content="Empower your church to help end the water crisis with charity: water. Pedro is a dynamic speaker who will inspire, equip, and activate your community."></meta>
      </Helmet>
      
      <div>
        <h1><a href="/"> charity: water</a></h1>
      </div>
      
      <br/>
      <div class="iframe-container">
       <iframe src="https://player.vimeo.com/video/316497942"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <br/>
      <div>
      </div>
      <Results/>

      <Testimonial/>

    </Layout>
   
    <Subscription/>
    <Footer/>
  </div>

        

  
)

export default BraveWork

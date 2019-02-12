import React from 'react'
import Layout from '../components/layout'

import Footer from '../components/Footer'
import Subscription from '../components/Subscription'
import Testimonial from '../components/Testimonial'

//      <div id="bg"></div>
const BraveWork = () => (
  <div id="backg">
    <Layout>
      
      <div>
        <h1><a href="/"> charity: water</a></h1>
      </div>
      <div class="iframe-container">
       <iframe src="https://player.vimeo.com/video/316497942"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <Testimonial/>

    </Layout>
   
    <Subscription/>
    <Footer/>
  </div>

        

  
)

export default BraveWork

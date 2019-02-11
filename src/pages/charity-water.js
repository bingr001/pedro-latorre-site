import React from 'react'
import Layout from '../components/layout'

import Footer from '../components/Footer'
import Subscription from '../components/Subscription'
import Testimonial from '../components/Testimonial'
import VideoTestimonial from '../components/VideoTestimonial'

//      <div id="bg"></div>
const BraveWork = () => (
    <Layout>
      <div>
      <h1>Pedro LaTorre + Charity: Water</h1>
      </div>
        
    
      <div>
        <VideoTestimonial/>
      </div>
      <div>
        <Testimonial/>
      </div>
      <Subscription/>
      <Footer/>
    </Layout>
  

        

  
)

export default BraveWork

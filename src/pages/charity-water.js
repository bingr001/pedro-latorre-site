import React from 'react'

import Footer from '../components/Footer'
import Subscription from '../components/Subscription'
import Layout from '../components/layout'
import Testimonial from '../components/Testimonial'
import VideoTestimonial from '../components/VideoTestimonial'

const BraveWork = () => (
  <div>
    <Layout>
    <h1>Charity: Water</h1>
    <p>Charity Water information</p>
    <div>
      <VideoTestimonial/>
    </div>
    <div>
      <Testimonial/>
    </div>
  </Layout>
  <Layout>

        
    <Subscription/>
    <Footer/>
  </Layout>

</div>
)

export default BraveWork

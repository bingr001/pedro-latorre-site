import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import Subscription from '../components/Subscription'
import Testimonial from '../components/Testimonial'
import Results from '../components/Results'
import Results2 from '../components/Results2'
//       <Results/>

//      <div id="bg"></div>
const BraveWork = () => (
  <div id="backg">
    <Layout>
      <Helmet>
        <title>Book Pedro | Brave Work</title>
        <meta name="description" content="Pedro is a dynamic speaker who will inspire, equip, and activate your community."></meta>
      </Helmet>
      
      <div>
        <h1><a href="/"> Brave Work</a></h1>
      </div>
      

      <div>
      </div>

      <Testimonial/>

    </Layout>
   
    <Subscription/>
    <Footer/>
  </div>

        

  
)

export default BraveWork

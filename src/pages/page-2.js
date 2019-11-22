import React from 'react'
// import { Link } from 'gatsby'
import logo from '../images/events.jpg'
import trees from '../images/palms.jpg'

// import Layout from '../components/layout'
// import Subscription from '../components/Subscription'
// import Testimonial from '../components/Testimonial';


const SecondPage = () => (
<div >
  <div class="logoHeader">
    <img style={{ maxWidth: 200}} src={logo} />
  </div>
  <div class ="heroContainer">
    <img style={{ maxWidth: 500 }} src={trees} />
    <p>
    Hambray keytar asymmetrical tilde, woke kombucha everyday carry vaporware viral activated charcoal pop-up lumbersexual schlitz readymade. 
    </p>
    <button>Click Me</button>
  </div>
  <div class="introVideo">
    <iframe src="https://www.youtube.com/embed/FV3PW2boNf0" title="pedro" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
  <div class="cta">
  <p>
  Hambray keytar asymmetrical tilde, woke kombucha everyday carry vaporware viral activated charcoal pop-up lumbersexual schlitz readymade. 
  Hambray keytar asymmetrical tilde, woke kombucha everyday carry vaporware viral activated charcoal pop-up lumbersexual schlitz readymade. 
  Hambray keytar asymmetrical tilde, woke kombucha everyday carry vaporware viral activated charcoal pop-up lumbersexual schlitz readymade. 

  </p>
  <button>Click Me</button>

  </div>

</div>
)

export default SecondPage

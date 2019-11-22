import React from 'react'
// import { Link } from 'gatsby'
import logo from '../images/events.jpg'
import trees from '../images/palms.jpg'
import { isAbsolute, relative } from 'path';

// import Layout from '../components/layout'
// import Subscription from '../components/Subscription'
// import Testimonial from '../components/Testimonial';
const herocontainerstyle = {
  // backgroundColor: "blue",
  position: "relative"
};

const introvideostyle = {
  // backgroundColor: "red"
};

const ctastyle = {
  // backgroundColor: "pink"
};

const logoheaderstyle = {
  maxWidth: 200,
  
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};
const treestyle = {
  paddingTop:20,
  width: "100%",
  
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};
const minicopystyle = {
 //paddingTop: 20,
  position: "absolute",
  width: "100%",
  top: "40%",
  fontSize: 18,
  marginLeft: 10,
  marginRight: 10,
  left: 0,
  maxWidth: 500
};
const littleButtonstyle = {
  //display: "block",
  // marginLeft: "auto",
  // marginRight: "auto",
  position: "absolute",
  top: "60%",
  marginLeft: "auto",
  marginRight: "auto",
 
  right: "0%"
};

const bravevideostyle = {
  paddingTop: 20,
  paddingBottom: 20,
  maxWidth: 1000,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};
const bigcopystyle = {
  paddingTop: 20,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 300
};
const bigbuttonstyle = {
  // paddingTop: 20,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 100

};

const SecondPage = () => (
<div >
  <div class="logoHeader" >
    <img style={logoheaderstyle} src={logo} />
  </div>
  <div class="heroContainer" style={herocontainerstyle}>
    <img style={treestyle} src={trees} />
    <p class="minicopy" style={minicopystyle}>
    Brave Work is for anyone willing to pause the pace of life and discover a new way to live.
    </p>
    <button class="littleButton" style={littleButtonstyle}>Start Your Brave Work</button>
  </div>
  <div class="introVideo" style={introvideostyle}>
    <iframe src="https://www.youtube.com/embed/FV3PW2boNf0" 
            title="pedro" 
            frameborder="0" 
            webkitallowfullscreen 
            mozallowfullscreen 
            allowfullscreen
            class="braveVideo"
            style={bravevideostyle}
            ></iframe>
  </div>

  <div class="cta" style={ctastyle}>
    <p class="bigCopy" style={bigcopystyle}>
      Brave Work began with a problem that absolutely needed to be solved. 
      I was traveling the world doing music, speaking, and inspiring thousands of people every year. 
      Yep, you read that right. The problem was movement without a focused mission. I had defined my passions, but not my purpose. 
      I had no bullseye. 
      I didn’t have a personal definition for success and let’s face it, if you and I do not take the time to define success for ourselves, 
      we will spend our entire lives living out someone else’s definition of it. 
    </p>
    <p class="bigCopy" style={bigcopystyle}>
      The ethos of Brave Work is to create a space for creative storytellers and pioneers to grow together. 
      I am bringing in specific friends who are changing the world on their own terms and giving them the space to share what they are learning. 
      We gather because we know that when passion, honesty, and humility collide anything is possible. 
      Brave Work is for anyone willing to pause the pace of life and discover a new way to live.

    </p>
    <button class="bigButton" style={bigbuttonstyle}>Start Your Brave Work</button>

  </div>

</div>
)

export default SecondPage

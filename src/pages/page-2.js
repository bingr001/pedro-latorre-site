import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
// import { Link } from 'gatsby'
import background from '../images/BG_woPedro.png'
import logo from '../images/logo-example.jpg'
import trees from '../images/laptop.jpg'
import profiletemp from '../images/profiletemp.jpg'
import anjelahProfile from '../images/anjelah.jpg'
import cobusProfile from '../images/cobus.jpg'




// import Layout from '../components/layout'
// import Subscription from '../components/Subscription'
// import Testimonial from '../components/Testimonial';


const SecondPage = () => (
<div class="braveworkpage" style={braveWorkPageStyle}>
  <Layout>
    <div class="logoHeader" >
      <img style={logoheaderstyle} src={logo} />
    </div>
    <div class="heroContainer" /*style={herocontainerstyle}*/>
      <img style={treestyle} src={trees} />
      <h1 class="minicopy" style={minicopystyle}>
      Brave Work is for anyone willing to pause the pace of life and discover a new way to live.
      </h1>
      <button class="littleButton" 
              style={littleButtonstyle}
              
        ><a href="https://www.eventbrite.com/e/brave-work-los-angeles-2020-tickets-82099095605">Sign Up for the Workshop</a> </button>
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
      <button class="bigButton" 
          style={bigbuttonstyle}>
          <a href="https://www.eventbrite.com/e/brave-work-los-angeles-2020-tickets-82099095605">
            Sign Up for the Workshop
          </a>
      </button>

    </div>
    <div class="testimonialWrapper" /*style={testimonialWrapperStyle}*/>
      <div class="testimonialCard" style={testimonialCardStyle}>
          <img src={anjelahProfile} style={testimonyProfileStyle}></img>
          <h2 class="testimonyName">Anjelah Johnson | Celebrity Comedian & Actress</h2>
          <h4 class="testimony">“Pedro LaTorre managed my sold out 16 city nationwide tour. Not only did he lead our entire team with excellence, but he effectively coordinated all logistics with each venue representative. I had peace of mind knowing that Pedro was representing my company and speaking on my behalf. No matter what kind of issue arose, Pedro was sure to handle everything with professionalism and grace. I would say that Pedro’s communication and problem-solving skills are invaluable to any company.” 
          </h4>
      </div>
      <div class="testimonialCard" style={testimonialCardStyle}>
          <img src={cobusProfile} style={testimonyProfileStyle}></img>
          <h2 class="testimonyName">Cobus Potgieter</h2>
          <h4 class="testimony">"My name is Cobus Potgieter, I'm a drummer, content creator, entrepreneur, and online personality with more than 12 years of experience in online content creation, communication, and marketing. I worked with Pedro a few months ago to refine my vision statement and get some more focus as I move into a new phase of my career. Pedro did an absolutely incredible job extracting the essence of my brand, refining it, and focusing it into a practical mission statement. Pedro is so gifted at communication and strategy because he truly, sincerely loves people and wants to see them thrive in God's plan for their lives. I felt supported, heard, and encouraged through the entire strategy session. His input has been incredibly effective as I've implemented it over the past few months. I would gladly recommended Pedro to any friends and/or colleagues looking for help finding direction and clarity in their careers and personal lives."
          </h4>
      </div>
      <div class="testimonialCard" style={testimonialCardStyle}>
          <img src={profiletemp} style={testimonyProfileStyle}></img>
          <h2 class="testimonyName">Brent John</h2>
          <h4 class="testimony">Selfies vice viral, health goth vegan umami meggings austin. Succulents tumeric slow-carb mixtape waistcoat. Squid deep v green juice chia vexillologist meditation. Polaroid iceland lyft kickstarter. Twee chicharrones crucifix, cornhole wolf cred intelligentsia bespoke fashion axe direct trade shaman vinyl helvetica vape. Put a bird on it lomo tbh direct trade yuccie.
          </h4>
      </div>
    </div>
  </Layout>
</div>
)

//styling

const braveWorkPageStyle = {
  backgroundImage: `url(${background})`,
  backgroundPostion: "center",
  backgroundSize: "cover",
  width: "100%",
  backgroundRepeat: "no-repeat"
}



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
  paddingTop: 20,
  width: "110%",

  display: "block",
  // marginLeft: "auto",
  // marginRight: "auto"
};
const minicopystyle = {
  //paddingTop: 20,
  // position: "absolute",
  // width: "100%",
  // top: "40%",
  // fontSize: 18,
  // marginLeft: 10,
  // marginRight: 10,
  // left: 0,
  // maxWidth: 500
  // transform: "translateY(10%)"

  //possible route
  // display: "flex",
  // textAlign: "center"
  display: "inline-block",
  position: "absolute",
  textAlign: "center",
  fontSize: 25,
  marginLeft: 10,
  marginRight: 10
  // left: "50%",
  // right: "50%",
  // transform: "translateY(10)"
};
const littleButtonstyle = {
  //display: "block",
  // marginLeft: "auto",
  // marginRight: "auto",
  // position: "absolute",
  // top: "60%",
  // marginLeft: "auto",
  // marginRight: "auto",

  // right: "0%"
  display: "inline-block",
  position: "absolute",
  marginTop: 100


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
  maxWidth: 300,
  fontSize: 16,
  color: "black"
};
const bigbuttonstyle = {
  // paddingTop: 20,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 100
};

// const testimonialWrapperStyle = {
//   maxWidth: 980,
//   position: "relative",
//   margin: "5%",
//   paddingBottom: 90,
//   border: "(0 solidBlue)",
//   border: "(0 solidBlack)",
//   backgroundColor: "rgba(27, 31, 34, 0.85)",
//   borderRadius: 10,
// }

const testimonialCardStyle = {
  // float: "left",
  // height: "auto",
  // maxWidth: "80%",
  // margin: 10,
  // marginBottom: 30,
  // alignItems: "center"
  display: "grid",
  gridTemplateColumns: "repeat(1, 3fr)",
  textAlign: "center",
  flexDirection: "column",
  width: "100%",
  margin: "(0 auto)",
  padding: 10
}

const testimonyProfileStyle = {
  // paddingTop: 20,
  width: "40%",
  display: "block",
  borderRadius: "50%",
  marginLeft: "auto",
  marginRight: "auto"

}


export default SecondPage

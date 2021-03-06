import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { Link } from 'gatsby' 
import background from '../images/BG_woPedro.png'
import logo from '../images/bwlogo.png'
import trees from '../images/laptop.jpg'
import profiletemp from '../images/profiletemp.jpg'
import anjelahprofile from '../images/anjelah.png'
import cobusprofile from '../images/cobus.png'
import markusprofile from '../images/markus.png'
import Footer from '../components/Footer'


// import Layout from '../components/layout'
// import Subscription from '../components/Subscription'
// import Testimonial from '../components/Testimonial';


const BraveWork = () => (
  <div class="braveworkpage" style={braveWorkPageStyle}>
    <Layout>
      <Helmet>
        <title>Brave Work</title>
        <meta name="description" content="      Brave Work is for anyone willing to pause the pace of life and discover a new way to live."></meta>
      </Helmet>
      <div class="logoHeader" >
        <Link to="/">
        <img style={logoheaderstyle} src={logo} />
        </Link>

      </div>
      <div class="heroContainer" /*style={herocontainerstyle}*/>
        <img style={treestyle} src={trees} />
        <h1 class="minicopy" style={minicopystyle}>
          Brave Work is for anyone willing to pause the pace of life and discover a new way to live.
      </h1>
        <button class="littleButton"
        // style={littleButtonstyle}

        ><a href="https://www.eventbrite.com/e/brave-work-los-angeles-2020-tickets-82099095605">Get tickets to Brave Work LA</a> </button>
      </div>
      <div class="introVideo" style={introvideostyle}>
        <iframe src="https://player.vimeo.com/video/377561319?title=0&byline=0&portrait=0"
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
        <p class="bigCopy" /*style={bigcopystyle}*/>
          Brave Work began with a problem that absolutely needed to be solved.
          I was traveling the world doing music, speaking, and inspiring thousands of people every year.
          Yep, you read that right. The problem was movement without a focused mission. I had defined my passions, but not my purpose.
          I had no bullseye.
          I didn’t have a personal definition for success and let’s face it, if you and I do not take the time to define success for ourselves,
          we will spend our entire lives living out someone else’s definition of it.
      </p>
        <p class="bigCopy" /*style={bigcopystyle}*/>
          The ethos of Brave Work is to create a space for creative storytellers and pioneers to grow together.
          I am bringing in specific friends who are changing the world on their own terms and giving them the space to share what they are learning.
          We gather because we know that when passion, honesty, and humility collide anything is possible.
          Brave Work is for anyone willing to pause the pace of life and discover a new way to live.
  
      </p>
        <button class="bigButton"
          style={bigbuttonstyle}>
          <a href="https://www.eventbrite.com/e/brave-work-los-angeles-2020-tickets-82099095605">
            Get tickets to Brave Work LA
          </a>
        </button>

      </div>
      <div class="testimonialWrapper" /*style={testimonialWrapperStyle}*/>
        <div class="testimonialCard" /*style={testimonialCardStyle}*/>
          <img src={anjelahprofile} style={testimonyProfileStyle}></img>
          <div>
            <h2 class="testimonyName">Anjelah Johnson | Celebrity Comedian & Actress</h2>
            <p class="testimony">“Pedro LaTorre managed my sold out 16 city nationwide tour. Not only did he lead our entire team with excellence, but he effectively coordinated all logistics with each venue representative. I had peace of mind knowing that Pedro was representing my company and speaking on my behalf. No matter what kind of issue arose, Pedro was sure to handle everything with professionalism and grace. I would say that Pedro’s communication and problem-solving skills are invaluable to any company.”
            </p>
          </div>

        </div>
        <div class="testimonialCard" /*style={testimonialCardStyle}*/>
          <img src={cobusprofile} style={testimonyProfileStyle}></img>
          <div>
            <h2 class="testimonyName">Cobus Potgieter | Drummer</h2>
            <p class="testimony">"My name is Cobus Potgieter, I'm a drummer, content creator, entrepreneur, and online personality with more than 12 years of experience in online content creation, communication, and marketing. I worked with Pedro a few months ago to refine my vision statement and get some more focus as I move into a new phase of my career. Pedro did an absolutely incredible job extracting the essence of my brand, refining it, and focusing it into a practical mission statement.</p>

            <p class="testimony">Pedro is so gifted at communication and strategy because he truly, sincerely loves people and wants to see them thrive in God's plan for their lives. I felt supported, heard, and encouraged through the entire strategy session. His input has been incredibly effective as I've implemented it over the past few months. I would gladly recommended Pedro to any friends and/or colleagues looking for help finding direction and clarity in their careers and personal lives."
            </p>
          </div>

        </div>
        <div class="testimonialCard" /*style={testimonialCardStyle}*/>
          <img src={markusprofile} style={testimonyProfileStyle}></img>
          <div>
            <h2 class="testimonyName">Markus McFolling | CEO of REACH 1</h2>
            <p class="testimony">"I’m very thankful for the guidance of Pedro within my organization. His leadership and voice has helped me develop a fundamental strategy on how to go about operating in an ethical yet practical and effective manner. It has been transformative with my staff and helped give them clear directives and understanding on how to go to the next level in our given field.</p>
            <p class="testimony"> Meeting Pedro was pivotal for me and my organization because we were at a make or break point. Meeting him helped propel us and allowed us to gain massive momentum. He has given me peace of mind and clear vision for the future. I’m a much more confident leader since applying the leadership principals for both home life and work."
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  </div>
)

//styling

const braveWorkPageStyle = {
  backgroundImage: `url(${background})`,
  backgroundPostion: "center",
  backgroundSize: "cover",
  width: "100vw",
  backgroundRepeat: "no-repeat"
}



const introvideostyle = {
  padding: "56.25% 0 0 0",
  position: "relative"
};

const ctastyle = {
  // backgroundColor: "pink"
};

const logoheaderstyle = {
  maxWidth: "50vw",

  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};
const treestyle = {
  paddingTop: 20,
  width: "100vw",

  display: "block",
  // marginLeft: "auto",
  // marginRight: "auto"
};
const minicopystyle = {

  display: "inline-block",
  position: "absolute",
  textAlign: "center",
  fontSize: 25,
  marginLeft: 10,
  marginRight: 10

};

const bravevideostyle = {
  paddingTop: 20,
  paddingBottom: 20,
  // maxWidth: 1000,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  // frameborder = "0",
  //  allow="autoplay, 
  //  fullscreen allowfullscreen
};

const bigbuttonstyle = {
  // paddingTop: 20,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 100
};





const testimonyProfileStyle = {
  // paddingTop: 20,
  width: "40%",
  display: "block",
  borderRadius: "50%",
  marginTop: 50,
  marginLeft: "auto",
  marginRight: "auto"

}


export default BraveWork

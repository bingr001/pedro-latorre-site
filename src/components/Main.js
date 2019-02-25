import React from 'react'
import PropTypes from 'prop-types'

import pedrofam from '../images/pedrofam.jpg'
import restla from '../images/restla.jpg'
import themiddleseat from '../images/themiddleseat.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pedrofam} alt="" /></span>
          <p>By the time he entered high school, Pedro had seen two failed marriages, gone to 13 different schools, and faced his share of challenges. 
            However, instead of being defined by those circumstances, he saw them as opportunities for growth. Baseball became more than a game, it was his sole passion. 
            By his senior year, Pedro had caught the attention of several professional baseball scouts. 
            During the first game of his senior season, everything changed. With one swing of the bat, he hit a home run and tore his rotator in the same moment. His faith was shaken and his dream to play professionally, felt out of reach. 
            Through many trying days, he allowed this to both prune and propel him into a new season of life.</p>
          
          <p>At the age of twenty, Pedro became the drummer for international recording artist KJ-52 and went on to play with several other artists including Tedashii, Anthem Lights, Rhema Soul, and Group 1 Crew. 
            And at the age of twenty-eight, he wrote his first book, <a href="https://www.amazon.com/Middle-Seat-Craving-Platforms-Loving/dp/1483572986/ref=sr_1_2?ie=UTF8&qid=1468983289&sr=8-2&keywords=pedro+latorre">The Middle Seat</a>, about learning to see average moments as the miraculous waiting to happen. 
            Through out this 8 year span, Pedro was being asked to speak in public schools, churches, and to professional athletes where he was given the opportunity to advocate for the gospel. 
            The Love he discovered for communicating those truths has now grown into speaking to thousands of students, leaders, and churches over the last 14 years.</p>
          <p>Pedro and his bride, Jessica, have one son, named Justice. 
            They live together in Los Angeles, California and wholeheartedly believe in the missional purpose and unification of the church — 
            and with this desire, they’re excited to advance the charity: water mission to see those affected by the water crisis, be given clean water!</p>

          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Rest LA</h2>
          <span className="image main"><img src={restla} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Middle Seat</h2>
          <span className="image main"><img src={themiddleseat} alt="" /></span>
          <p>The Middle Seat started as a moment. A moment that forced me into the dreaded middle seat on Delta Flight 940 from Oregon to Florida. I had been out on the road drumming and speaking for quite some time. I was tired and would have strapped a massive "DO NOT DISTURB" sign to my forehead, if I could have. I was hoping that my mileage status would bump me into first class and keep me far from talkative humans. Don’t you judge me! You know you have had similar feelings! All of my prayers went unanswered as I squeezed into the middle seat. I was uncomfortable, tired, and pretty grumpy. But this single red eye flight would change my perspective on people forever. I believe all of us are in middle seat moments everyday. Whether it’s the grocery store or the gym we all have the ability to be the answer to someone's prayer. 
            <br/>
            <br/>
            We have the ability to be the friend that someone has been desperate to know. The middle seat is not about saying the right things or being overly spiritual, it’s about learning to see average moments as miracles waiting to happen. I open the corridors of my heart in this book and unfortunately it’s not all pretty. I needed this middle seat moment to change my perspective on God and people. What if life was more than building your brand? What if your platform doesn’t need to be reached but needs to be realized? What if we stopped craving platforms and started loving people?</p>
            <br/>
            Purchase The Middle Seat below!
            <br/>
            <a href="https://www.amazon.com/Middle-Seat-Craving-Platforms-Loving/dp/1483572986/ref=sr_1_2?ie=UTF8&qid=1468983289&sr=8-2&keywords=pedro+latorre">Amazon</a>
            <br/>
            <a href="https://www.barnesandnoble.com/w/the-middle-seat-pedro-latorre/1124125010?ean=9781483572987">Barnes and Noble</a>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form name="Pedro Contact Form" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field"  >
            <input type="hidden" name="Pedro Contact Form" value="Pedro Contact Form" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><button type="submit">Send</button></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.instagram.com/pedrolatorre_/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
 
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
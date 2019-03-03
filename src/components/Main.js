import React from 'react'
import PropTypes from 'prop-types'

import pedrofam from '../images/pedrofam.jpg'
import restla from '../images/restla.jpg'
import themiddleseat from '../images/themiddleseat.png'
import events from '../images/events.jpg'

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
          <h2 className="major">EVENTS</h2>
          <span className="image main"><img src={events} alt="" /></span>
          <p>
            EVENTS TBA
          </p>
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
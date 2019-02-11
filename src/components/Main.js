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
          <p>Pedro LaTorre is not your typical author. He never set out to write a book or speak to millions of people. Prior to Pedro finishing middle school he had seen two failed marriages. Much of his early years were full of challenges that he chose to see as opportunities. By high school Pedro had caught the attention of several professional baseball scouts. His first at bat his senior season changed the trajectory of his future. In one swing of the bat he hit a home run and tore his rotator simultaneously. His faith was shaken and his potential was now a thing of the past. Confusion and self-doubt hit him like a ton of bricks. </p>
          <p>Through many trying days he allowed this to both prune and propel him into a new season of life. At the age of twenty Pedro became the drummer for International Recording Artist KJ-52. Pedro later went on to play with several artists including: Tedashi, Anthem Lights, Rhema Soul, Group 1 Crew and many others. Pedro feels fortunate to have been inspired under world renowned communicator Reggie Dabbs and other great men to grow Pedro's heart for God and people. He has been speaking to students, leaders, and churches for over ten years.</p>
          <p>Pedro and his bride Jessica serve as the lead pastors of <a href="https://www.restla.org">rest | LA </a>, a growing missional house church community based out of Los Angeles, CA. They have one son handsome son named Justice, who is three and a dog named Demi who sheds incessantly.</p>

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
            <a href="https://www.amazon.com/Middle-Seat-Craving-Platforms-Loving/dp/1483572986/ref=sr_1_2?ie=UTF8&qid=1468983289&sr=8-2&keywords=pedro+latorre">Amazon</a>
            <br/>
            <a href="https://www.barnesandnoble.com/w/the-middle-seat-pedro-latorre/1124125010?ean=9781483572987">Barnes and Noble</a>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post"  >
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
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
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
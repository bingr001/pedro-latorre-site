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
          <p>Pedro and his bride, Jessica, have one son, named Justice. 
            They live together in Los Angeles, California and wholeheartedly believe in the missional purpose and 
            unification of the church — and with this desire, 
            they’re excited to continue consulting for various creatives and organizations.</p>
          
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
          {
            <div>
              <del> 
                March 17, 2019 - <a href="https://www.rebel.church/">Rebel Church </a> - San Antonio, TX
                <br/>
                March 24, 2019 - <a href="https://www.renewlifechurch.com/">Renew Life Church </a> - Midland, TX
                <br/>
                March 26, 2019 - <a href="https://open.spotify.com/episode/4oNAozSE47iAVslRVH0qgC?si=d8i-GQqhS9yZgrzH5hxRPw"> Luke Lezon Podcast</a> - Spotify
                <br/>
                June 11, 2019 - <a href="https://thehangnyc.com">The Hang Manhattan</a> - New York City, New York
                <br/>
                July 21, 2019 - <a href="https://www.alive.org"> Alive Festival </a> - Mineral City, OH
                <br/>
                July 28, 2019 - <a href="https://www.raincitychurch.com"> Rain City Church </a> - Bellevue, WA
                <br/>
              </del>

              <p>
                Aug 18th – Point Pleasant, WV
                <br/>
                Sept. 13-14th - Plant City, FL
                <br/>
                Sept 14th - Sandusky, OH
                <br/>
                Sept 15th - Amarillo, TX
                <br/>
                Sept 21st - Charlotte, NC
                <br/>
                Sept 26th - Roswell, NM
                <br/>
                Sept 27th - Joseph City, AX
                <br/>
                Sept 28th - Grand Junction, CO
                <br/>
                Sept 29th - Billings, MT
                <br/>
                Nov 1-2nd - Indianapolis, IN
                <br/>
                Nov 8-9th - Springfield, MO
                <br/>
                Nov 15-16th - West Michigan
                <br/>
                Nov 22nd-23rd - Bossier City, LA
              </p>
          </div>
          }
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

import React from 'react'
import PropTypes from 'prop-types'
import pedro from '../images/pedro.jpg'
import pedroLogo from '../images/PL-LOGO-WHITE.png'

console.log(pedro)




const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>

    <div className="content">
      <div className="inner">
        <span className="image main2"> <img src={pedroLogo} alt="" /></span>
        
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              window.location = "/charity-water";
            }}
          >
            charity: water
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            EVENTS
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  route: PropTypes.object,
  timeout: PropTypes.bool,
}

export default Header

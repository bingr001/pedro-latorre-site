import React from 'react'
import PropTypes from 'prop-types'
import pedro from '../images/pedro.jpg'
import pedroLogo from '../images/PL-LOGO-min.png'

console.log(pedro)




const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>

    <div className="content">
      <div className="inner">
        <span className="image main"> <img src={pedroLogo} alt="" /></span>

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
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              window.location = "/charity-water";
            }}
          >
            Charity Water
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Book
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
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

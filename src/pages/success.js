import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import pic11 from '../assets/images/pic11.jpg'

const Success = (props) => (
    <Layout>

        <div >
            <div >
                <header >
                    <h1>Success!</h1>
                </header>
                <span className="image main"><img src={pic11} alt="" /></span>
                <p>Thank you for contacting us! 
                <br/>You have successfully filled out the contact form</p>
                <br/>
                <Link to="/">Go back to the homepage</Link>
            </div>
        </div>
    </Layout>
)

export default Success
import React from 'react'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Success = (props) => (
    <Layout>

        <div >
           
                <div >
                    <header >
                        <h1>Success/Thank You Page</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Thank you for contacting us!</p>
                </div>
        </div>
    </Layout>
)

export default Success
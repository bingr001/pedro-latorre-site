import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Subscription from '../components/Subscription'
import Testimonial from '../components/Testimonial';


const SecondPage = () => (
    <Layout>
        <h1>Hi from the second page</h1>
        <Link to="/">Go back to the homepage</Link>
        <br></br>
        <div >

            <div class="projects-wrapper">
                <h2>Videos By Pedro</h2>
                <div class="video-container">
                    <div class="proj-box-format">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="pedro" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="proj-box-format">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="pedro" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="proj-box-format">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="pedro" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>

            </div>

        </div>

        <Testimonial />
        <Subscription />
    </Layout>
)

export default SecondPage

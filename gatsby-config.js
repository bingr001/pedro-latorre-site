module.exports = {
  siteMetadata: {
    title: "Pedro LaTorre",
    author: "Brent",
    description: "You Are Not Alone"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/PL.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-77404974-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "pedrolatorre.com",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

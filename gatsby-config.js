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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),//probably need to review this route
      },
    },
    'gatsby-transformer-sharp', 
    'gatsby-plugin-sharp'
  ],
}

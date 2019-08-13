module.exports = {
  siteMetadata: {
    title: "Pedro LaTorre",
    description: "Pedro LaTorre is a dynamic speaker who ignites action within the church."
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
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

module.exports = {
  pathPrefix: '/gatsby-redux-starter',
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     /*
    //     * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
    //     * Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
    //     */
    //     baseUrl: `turbotax.intuit.ca`,
    //     // The protocol. This can be http or https.
    //     protocol: `https`,
    //     // Indicates whether the site is hosted on wordpress.com.
    //     // If false, then the asumption is made that the site is self hosted.
    //     // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    //     // If your site is hosted on wordpress.org, then set this to false.
    //     hostingWPCOM: false,
    //     // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
    //     // This feature is untested for sites hosted on Wordpress.com
    //     useACF: false,
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/atoms/styles/'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};

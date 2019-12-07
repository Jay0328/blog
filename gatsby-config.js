module.exports = {
  siteMetadata: {
    title: `Jay`,
    description: `Blog - Jay`,
    author: `Jay`,
    facebook: `https://www.facebook.com/yuchieh.chen.taku`,
    github: `https://github.com/Jay0328`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-plugin-nprogress`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout/index.tsx')
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jay`,
        short_name: `Jay`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`
        //  icon: `src/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};

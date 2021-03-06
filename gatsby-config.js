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
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#663399'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 840
            }
          },
          'gatsby-remark-external-links',
          'gatsby-remark-autolink-headers',
          /*
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              classPrefix: 'gatsby-code-',
              directory: `${__dirname}/examples/`
            }
          },
          */
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // classPrefix: 'gatsby-code-',
              showLineNumbers: true
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
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

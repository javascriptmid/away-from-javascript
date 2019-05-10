const theme = require('./src/components/ThemeProvider/theme');

module.exports = {
  siteMetadata: {
    title: 'Away from Javascript',
    siteUrl: 'http://away-from-javascript.netlify.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-feed',
      options: {
        feedURL: 'https://rss.simplecast.com/podcasts/10278/rss',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-64555470-9',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Away from Javascript',
        short_name: 'AFJ',
        start_url: '/',
        background_color: theme.Lighter,
        theme_color: theme.Yellow,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        orientation: 'natural',
        display: 'standalone',
        icon: 'static/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};

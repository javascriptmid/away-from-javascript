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
  ],
};

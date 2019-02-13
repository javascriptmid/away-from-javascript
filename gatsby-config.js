module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Podcast Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-feed',
      options: {
        feedURL: 'https://rss.simplecast.com/podcasts/10278/rss',
      },
    },
  ],
};

module.exports = {
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gdg-blog-gatsby`,
        short_name: `gdg-blog-gatsby`,
        start_url: `https://gdg-algiers-blog-gatsby.netlify.app/`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};

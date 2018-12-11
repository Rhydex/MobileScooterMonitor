// In your gatsby-config.js
var path = require('path');

module.exports = {
plugins: [
    {
      resolve: `@fs/gatsby-plugin-drive`,
      options: {
        folderId: `17hgAXfEve4NUR32qslbBY-eCOjdX_8R0`,
        keyFile: path.resolve(__dirname, 'client_secret.json'),
        destination: path.join(__dirname, `src/content`),
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-csv`,
    'gatsby-transformer-remark',
  ],
}
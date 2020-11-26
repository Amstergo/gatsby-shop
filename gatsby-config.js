module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'gcms',
        url:
          'https://api-eu-central-1.graphcms.com/v2/ckhyqrpb1n58b01xkfxp6g8zq/master',
      },
    },
  ],
};

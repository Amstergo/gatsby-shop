const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { products },
    },
  } = await graphql(`
    {
      gcms {
        products(stage: PUBLISHED) {
          id
          slug
        }
      }
    }
  `);

  products.forEach(({ id, slug }) =>
    createPage({
      path: `/products/${slug}`,
      component: path.resolve('./src/templates/ProductPage.tsx'),
      context: {
        id,
      },
    }),
  );
};

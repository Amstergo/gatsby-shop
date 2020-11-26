import * as React from 'react';
import { graphql } from 'gatsby';

const ProductPage = ({
  data: {
    gcms: { product },
  },
}) => (
  <>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>
      {new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'EUR',
      }).format(product.price)}
    </p>
  </>
);

export const query = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        name
        description
        price
      }
    }
  }
`;

export default ProductPage;

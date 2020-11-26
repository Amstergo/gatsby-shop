import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Products = () => {
  const {
    gcms: { products },
  } = useStaticQuery(query);

  return (
    <div>
      Products Component
      {products.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

const query = graphql`
  {
    gcms {
      products {
        name
        slug
      }
    }
  }
`;

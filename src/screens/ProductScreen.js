import React from 'react';

const ProductScreen = ({ match }) => {
  const id = match.params.id;
  return (
    <div style={{ marginTop: '20rem' }}>
      Product Screen, product id: {`${id}`}
    </div>
  );
};

export default ProductScreen;

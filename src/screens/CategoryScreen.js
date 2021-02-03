import React from 'react';

const CategoryScreen = ({ match }) => {
  let id;
  if (match.params.id) {
    id = match.params.id;
  }
  return (
    <div style={{ marginTop: '20rem' }}>
      Category screen{id && `: cat ${id}`}
    </div>
  );
};

export default CategoryScreen;

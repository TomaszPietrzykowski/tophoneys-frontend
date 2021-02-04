import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  test: {
    ...theme.flex.col,
    color: 'green',
    marginTop: '20rem',
  },
}));

const CategoryScreen = ({ match }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const id = match.params.id;
  const endpoint = id ? `/api/products/category/${id}` : '/api/products';

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(endpoint);

      setProducts(data);
    };
    fetchProducts();
  }, [endpoint]);

  return (
    <div className={classes.test}>
      Category screen:{' '}
      {products.map((product) => {
        return <h3 key={product._id}>{product.name}</h3>;
      })}
    </div>
  );
};

export default CategoryScreen;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  test: {
    color: 'green',
    marginTop: '20rem',
  },
}));

const ProductScreen = ({ match }) => {
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <div className={classes.test}>
      {product && `product fetched: ${product.name}`}
    </div>
  );
};

export default ProductScreen;

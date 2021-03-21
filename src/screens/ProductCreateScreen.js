import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { createProduct } from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&$checked": {
      color: "green",
    },
  },
  checked: {},
}))(Checkbox);

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    ...theme.typography.source,
    marginTop: "15rem",
    color: theme.palette.text.primary,
  },
  title: {
    ...theme.typography.prosto,
    marginBottom: "2rem",
  },
  form: {
    ...theme.flex.col,
    "& > *": {
      marginBottom: "2rem",
      width: "auto",
    },
  },
  checkboxContainer: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    width: "100%",
  },
  checkboxLabel: {
    fontSize: "1.2rem",
  },
  submitBtn: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    ...theme.typography.open,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const ProductCreateScreen = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [capacityDropdown, setCapacityDropdown] = useState([]);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState([]);
  const [countInStock, setCountInStock] = useState(0);
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [brand, setBrand] = useState("");
  const [isPromo, setIsPromo] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [label, setLabel] = useState("");
  const [productId, setProductId] = useState("");

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, success } = useSelector(
    (state) => state.productCreate
  );

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAdmin) {
      history.push("/");
    }
    if (success) {
      history.push("/admin/productlist");
    }
  }, [dispatch, history, userInfo, success]);

  let categoryArray = [];
  let capacityDropdownArray = [];

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        image,
        description,
        category,
        capacity,
        capacityDropdown,
        price,
        countInStock,
        countryOfOrigin,
        brand,
        isPromo,
        isPublished,
      })
    );
  };

  const categories = [
    ["All honeys", "honeys"],
    ["All teas", "teas"],
    ["Creamed honeys", "creamedhoneys"],
  ];

  const categoryHandler = (e) => {
    setCategory([...category, e.target.value]);
  };

  const addDropdownHandler = (e) => {
    e.preventDefault();
    setCapacityDropdown([...capacityDropdown, { label, productId }]);
    setLabel("");
    setProductId("");
  };

  const clearDropdown = () => {
    setCapacityDropdown([]);
    setDropdownOpen(false);
    setLabel("");
    setProductId("");
  };

  return (
    <div className={classes.container}>
      <Link to="/admin/productlist">
        <Button className={classes.backBtn}>&larr; All products</Button>
      </Link>
      <form onSubmit={submitHandler} className={classes.form}>
        <h1 className={classes.title}>Create product</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : (
          <>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="image"
              label="image"
              variant="outlined"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              id="capacity"
              label="Capacity"
              variant="outlined"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
            <TextField
              id="countryOfOrigin"
              label="Country of origin"
              variant="outlined"
              value={countryOfOrigin}
              onChange={(e) => setCountryOfOrigin(e.target.value)}
            />
            <TextField
              id="brand"
              label="Brand"
              variant="outlined"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <h4>Categories</h4>
            <select onChange={categoryHandler}>
              <option value="add" selected disabled>
                Add categories
              </option>
              {categories.map((cat, i) => (
                <option key={i} value={cat[1]}>
                  {cat[0]}
                </option>
              ))}
            </select>
            <div>
              {category.length > 0 &&
                category.map((cat, i) => <div key={i}>{cat}</div>)}
            </div>

            <h4>Price</h4>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <h4>Count in stock</h4>
            <input
              type="number"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />

            <div className={classes.checkboxContainer}>
              <CustomCheckbox
                checked={isPromo}
                onChange={(e) => setIsPromo(e.target.checked)}
              />
              <span className={classes.checkboxLabel}>Sale</span>
            </div>
            <div className={classes.checkboxContainer}>
              <CustomCheckbox
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
              />
              <span className={classes.checkboxLabel}>Publish in shop</span>
            </div>
            <Button type="submit" className={classes.submitBtn}>
              Create
            </Button>
          </>
        )}
      </form>
      {capacityDropdown.map((el, i) => (
        <div>
          {el.label} : {el.productId}
        </div>
      ))}
      {dropdownOpen && (
        <form onSubmit={addDropdownHandler}>
          <TextField
            id="label"
            label="Label"
            variant="outlined"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <TextField
            id="productId"
            label="Product ID"
            variant="outlined"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <Button type="submit">Add</Button>
        </form>
      )}
      {dropdownOpen ? (
        <Button onClick={clearDropdown}>Clear dropdown</Button>
      ) : (
        <Button onClick={() => setDropdownOpen(true)}>
          Add capacity dropdown
        </Button>
      )}
    </div>
  );
};

export default ProductCreateScreen;

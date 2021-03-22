import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { withStyles, makeStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import DeleteIcon from "@material-ui/icons/Delete";

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
    ...theme.typography.source,
    marginTop: "15rem",
    color: theme.palette.text.primary,
  },
  title: {
    ...theme.typography.prosto,
    marginBottom: "2rem",
  },
  formControl: {
    minWidth: 220,
  },
  col: {
    ...theme.flex.col,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    "& > *": {
      marginBottom: "2rem",
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
  chipContainer: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  priceInput: {
    minWidth: 200,
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

const ProductEditScreen = ({ history, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const editedProductId = match.params.id;

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

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  //   const {
  //     loading: loadingEdit,
  //     error: errorEdit,
  //     success: successEdit,
  //   } = useSelector((state) => state.productEdit);

  useEffect(() => {
    if (!product.name || product._id !== editedProductId) {
      dispatch(listProductDetails(editedProductId));
    } else {
      setName(product.name);
      setImage(product.image);
      setDescription(product.description);
      setCapacity(product.capacity);
      setCapacityDropdown(product.capacityDropdown);
      setPrice(product.price * 100);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setCountryOfOrigin(product.countryOfOrigin);
      setBrand(product.brand);
      setIsPromo(product.isPromo);
      setIsPublished(product.isPublished);
    }

    // dispatch({ type: PRODUCT_CREATE_RESET });
    if (!userInfo) {
      history.push("/login");
    } else if (!userInfo.isAdmin) {
      history.push("/");
    }

    // if (successEdit) {
    //   history.push("/admin/productlist");
    // }
  }, [dispatch, history, product, editedProductId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(
    //   createProduct({
    //     name,
    //     image,
    //     description,
    //     category,
    //     capacity,
    //     capacityDropdown,
    //     price: (price / 100).toFixed(2),
    //     countInStock,
    //     countryOfOrigin,
    //     brand,
    //     isPromo,
    //     isPublished,
    //   })
    // );
  };

  const categories = [
    ["All honeys", "honeys"],
    ["Creamed honeys", "creamedhoneys"],
    ["All teas", "teas"],
    ["Black teas", "blackteas"],
    ["Green teas", "greenteas"],
    ["Fruit teas", "fruitteas"],
  ];

  const categoryHandler = (e) => {
    setCategory([...category, e.target.value]);
  };

  const addDropdownHandler = (e) => {
    e.preventDefault();
    if (!label || !productId) {
      window.alert("Enter label and product ID");
    } else if (productId.length !== 24) {
      window.alert("Incorrect product ID");
    } else {
      setCapacityDropdown([...capacityDropdown, { label, productId }]);
      setLabel("");
      setProductId("");
    }
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
      <h1 className={classes.title}>Edit product</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <Grid container>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="error" message={error} />
          ) : (
            <>
              <Grid item md={4} className={classes.col}>
                <TextField
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  required
                  id="description"
                  label="Description"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                  id="image"
                  label="image"
                  variant="outlined"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Grid>
              <Grid item md={4} className={classes.col}>
                <TextField
                  required
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
              </Grid>
              <Grid item md={4} className={classes.col}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="category-label">Add category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="demo-simple-select-outlined"
                    value={""}
                    onChange={categoryHandler}
                    label="Add category"
                  >
                    {categories.map((cat, i) => (
                      <MenuItem key={i} value={cat[1]}>
                        {cat[0]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className={classes.chipContainer}>
                  {category.length > 0 &&
                    category.map((cat, i) => (
                      <Chip key={i} label={cat} color="primary" />
                    ))}
                  {category.length > 0 && (
                    <IconButton onClick={() => setCategory([])}>
                      <DeleteIcon style={{ color: "red" }} />
                    </IconButton>
                  )}
                </div>

                <TextField
                  required
                  className={classes.priceInput}
                  id="standard-number"
                  label="Price (cents)"
                  type="number"
                  variant="outlined"
                  helperText="Price x 100 e.g: 1999 for &euro;19,99"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  InputProps={{ inputProps: { min: 0 } }}
                />

                <TextField
                  required
                  className={classes.priceInput}
                  id="standard-number"
                  label="Count in stock"
                  type="number"
                  variant="outlined"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                  InputProps={{ inputProps: { min: 0 } }}
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
              </Grid>
            </>
          )}
        </Grid>
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

export default ProductEditScreen;

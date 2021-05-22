import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@material-ui/core"
import Chip from "@material-ui/core/Chip"
import { withStyles, makeStyles } from "@material-ui/styles"
import Checkbox from "@material-ui/core/Checkbox"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { listProductDetails, updateProduct } from "../actions/productActions"
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants"
import DeleteIcon from "@material-ui/icons/Delete"

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&$checked": {
      color: "green",
    },
  },
  checked: {},
}))(Checkbox)

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
  imagePreview: {
    width: 200,
    height: 200,
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
  text: {
    minWidth: 250,
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
}))

const ProductEditScreen = ({ history, match }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const editedProductId = match.params.id

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [capacity, setCapacity] = useState("")
  const [capacityDropdown, setCapacityDropdown] = useState([])
  const [price, setPrice] = useState(0)
  const [previousPrice, setPreviousPrice] = useState(0)
  const [category, setCategory] = useState([])
  const [countInStock, setCountInStock] = useState(0)
  const [countryOfOrigin, setCountryOfOrigin] = useState("")
  const [brand, setBrand] = useState("")
  const [isPromo, setIsPromo] = useState(false)
  const [isPublished, setIsPublished] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [label, setLabel] = useState("")
  const [productId, setProductId] = useState("")
  const [uploading, setUploading] = useState(false)

  const { userInfo } = useSelector((state) => state.userLogin)

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  )

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.productUpdate)

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push("/admin/productlist")
    } else {
      if (!product.name || product._id !== editedProductId) {
        dispatch(listProductDetails(editedProductId))
      } else {
        setName(product.name)
        setImage(product.image)
        setDescription(product.description)
        setCapacity(product.capacity)
        setCapacityDropdown(product.capacityDropdown)
        setPrice(Math.ceil(product.price * 100))
        setPreviousPrice(Math.ceil(product.previousPrice * 100))
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setCountryOfOrigin(product.countryOfOrigin)
        setBrand(product.brand)
        setIsPromo(product.isPromo)
        setIsPublished(product.isPublished)
      }
    }
    if (!userInfo) {
      history.push("/login")
    } else if (!userInfo.isAdmin) {
      history.push("/")
    }
  }, [dispatch, history, product, editedProductId, successUpdate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(previousPrice)
    dispatch(
      updateProduct({
        _id: editedProductId,
        name,
        image,
        description,
        category,
        capacity,
        capacityDropdown,
        price: price / 100,
        previousPrice: previousPrice / 100,
        countInStock,
        countryOfOrigin,
        brand,
        isPromo,
        isPublished,
      })
    )
  }

  const categories = [
    ["All honeys", "honeys"],
    ["Pure honeys", "purehoneys"],
    ["Acacia honeys", "acaciahoneys"],
    ["Sunflower honeys", "sunflowerhoneys"],
    ["Linden honeys", "lindenhoneys"],
    ["Buckweat honeys", "buckwheathoneys"],
    ["Multiflorous honeys", "multiflowerhoneys"],
    ["Goldenrod honeys", "goldenrodhoneys"],
    ["Forest honeys", "foresthoneys"],
    ["Raspberry honeys", "raspberryhoneys"],
    ["Corriander honeys", "corianderhoneys"],
    ["Heather honeys", "heatherhoneys"],
    ["Dandelion honeys", "dandelionhoneys"],
    ["Coniferous honeydew", "coniferoushoneydew"],
    ["Deciduous honeydew", "deciduoushoneydew"],
    ["Creamed honeys", "creamedhoneys"],
    ["Honeys with additives", "additives"],
    ["Accessories", "accessories"],
    ["Bee products", "beeproducts"],
    ["All tea", "tea"],
    ["Black tea", "blacktea"],
    ["Green tea", "greentea"],
    ["Fruit tea", "fruittea"],
    ["Functional tea", "functionaltea"],
    ["Rooibos", "rooibos"],
    ["Yerba Mate", "yerbamate"],
    ["Canned tea", "cannedtea"],
    ["Gift sets", "giftsets"],
  ]

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image", file)
    setUploading(true)
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

      const { data } = await axios.post("/api/uploads", formData, config)
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const categoryHandler = (e) => {
    setCategory([...category, e.target.value])
  }

  const addDropdownHandler = (e) => {
    e.preventDefault()
    if (!label || !productId) {
      window.alert("Enter label and product ID")
    } else if (productId.length !== 24) {
      window.alert("Incorrect product ID")
    } else {
      setCapacityDropdown([...capacityDropdown, { label, productId }])
      setLabel("")
      setProductId("")
    }
  }

  const clearDropdown = () => {
    setCapacityDropdown([])
    setDropdownOpen(false)
    setLabel("")
    setProductId("")
  }

  return (
    <div className={classes.container}>
      <Link to="/admin/productlist">
        <Button className={classes.backBtn}>&larr; All products</Button>
      </Link>
      <h1 className={classes.title}>Edit product</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <Grid container>
          {loading || loadingUpdate ? (
            <Loader />
          ) : error ? (
            <Message variant="error" message={error} />
          ) : errorUpdate ? (
            <Message variant="error" message={errorUpdate} />
          ) : (
            <>
              <Grid item md={4} className={classes.col}>
                <TextField
                  className={classes.text}
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  className={classes.text}
                  required
                  id="description"
                  label="Description"
                  variant="outlined"
                  multiline
                  rows="12"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                <input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  hidden
                  onChange={uploadFileHandler}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span">
                    Upload image
                  </Button>
                </label>
                {uploading ? (
                  <Loader />
                ) : (
                  <img
                    src={image}
                    alt={name}
                    className={classes.imagePreview}
                  />
                )}
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
                  className={classes.priceInput}
                  id="standard-number"
                  label="Previous Price (cents)"
                  type="number"
                  variant="outlined"
                  helperText="Price x 100 e.g: 1999 for &euro;19,99"
                  value={previousPrice}
                  onChange={(e) => setPreviousPrice(e.target.value)}
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
                  Update
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </form>
      {loading || loadingUpdate ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default ProductEditScreen

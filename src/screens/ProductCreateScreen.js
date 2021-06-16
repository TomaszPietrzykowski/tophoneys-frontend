import React, { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
// mui
import { withStyles, makeStyles } from "@material-ui/styles"
import {
  Button,
  TextField,
  FormControl,
  IconButton,
  InputBase,
  NativeSelect,
  Tooltip,
} from "@material-ui/core"
import Chip from "@material-ui/core/Chip"
import Checkbox from "@material-ui/core/Checkbox"
import DeleteIcon from "@material-ui/icons/Delete"
// custom
import Message from "../components/Message"
import Loader from "../components/ui/Loader"
import { createProduct } from "../actions/productActions"
import { PRODUCT_CREATE_RESET } from "../constants/productConstants"
import categories from "../config/categories"

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&$checked": {
      color: theme.palette.common.success,
    },
  },
  checked: {},
}))(Checkbox)

const CssTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.secondary.light,
    },
    "& .MuiInput-focused fieldset": {
      color: theme.palette.secondary.light,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.light,
      },
    },
  },
}))(TextField)

const CssSelect = withStyles((theme) => ({
  root: {
    "label.MuiSelect-nativeInput": {
      color: theme.palette.secondary.light,
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    border: `1px solid ${"#ced4da"}`,
    fontSize: "1rem",
    padding: "1rem",
    "&:focus": {
      borderRadius: 4,
      borderColor: theme.palette.secondary.light,
    },
    "&:hover": {
      borderRadius: 4,
      borderColor: theme.palette.secondary.light,
    },
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.row,
    justifyContent: "flex-start",
    ...theme.typography.mont,
    padding: "2rem 0 0",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0 0",
    },
  },
  content: {
    margin: "0 auto 2rem 25%",
    padding: "5rem",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: 2,
      background: `linear-gradient(${theme.palette.common.background}, 40%, ${theme.palette.secondary.main}, 60%, ${theme.palette.common.background})`,
      [theme.breakpoints.down("xs")]: {
        width: 1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "min-content",
      minWidth: "80%",
      margin: "0 auto 2rem",
      padding: "1.5rem .5rem 1.5rem 1rem",
    },
  },
  header: {
    ...theme.flex.rowStart,
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    marginBottom: "5rem",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
      marginBottom: "3rem",
    },
  },
  adminBadge: {
    ...theme.utils.adminBadge,
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".85rem",
      right: "-3.3rem",
    },
  },
  form: {
    ...theme.flex.col,
    alignItems: "flex-start",
    minWidth: 280,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 380,
    },
    "& > *": {
      marginBottom: "2rem",
      width: 280,
      [theme.breakpoints.down("xs")]: {
        width: 270,
      },
    },
  },
  textarea: {
    width: 540,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 380,
      width: "100%",
    },
  },
  imagePreview: {
    width: 280,
    height: 280,
  },
  checkboxContainer: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },
  checkboxLabel: {
    fontSize: "1.2rem",
    fontWeight: 300,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  chipContainer: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    ...theme.typography.mont,
    color: "white",
    backgroundColor: theme.palette.text.secondary,
  },
  priceInput: {
    minWidth: 200,
  },
  uploadBtn: {
    ...theme.buttons.primary,
    padding: ".5rem 0 .4rem",
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".85rem",
      padding: ".4rem 1.6rem",
    },
  },
  submitBtn: {
    ...theme.buttons.primary,
    paddingTop: ".7rem",
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      padding: ".6rem 1.6rem",
    },
  },
  inputLabel: {
    fontSize: "1.2rem",
    fontWeight: 300,
    color: theme.palette.text.primary,
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  deleteIcon: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
}))

const ProductCreateScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [capacity, setCapacity] = useState("")
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState([])
  const [countInStock, setCountInStock] = useState(0)
  const [countryOfOrigin, setCountryOfOrigin] = useState("")
  const [brand, setBrand] = useState("")
  const [isPromo, setIsPromo] = useState(false)
  const [isPublished, setIsPublished] = useState(false)
  const [uploading, setUploading] = useState(false)

  const { userInfo } = useSelector((state) => state.userLogin)

  const { loading, error, success } = useSelector(
    (state) => state.productCreate
  )

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (!userInfo) {
      history.push("/login")
    } else if (!userInfo.isAdmin) {
      history.push("/")
    }
    if (success) {
      history.push("/admin/productlist")
    }
  }, [dispatch, history, userInfo, success])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProduct({
        name,
        image,
        description,
        category,
        capacity,
        price: (price / 100).toFixed(2),
        countInStock,
        countryOfOrigin,
        brand,
        isPromo,
        isPublished,
      })
    )
  }

  const rootCategories = categories

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

  return (
    <div className={classes.container}>
      {/* <Link to="/admin/productlist">
        <Button className={classes.backBtn}>&larr; All products</Button>
      </Link> */}
      <main className={classes.content}>
        <div className={classes.header}>
          <h1 className={classes.title}>
            Create product<span className={classes.adminBadge}>Admin</span>
          </h1>
        </div>
        <form onSubmit={submitHandler} className={classes.form}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="error" message={error} />
          ) : (
            <>
              <div className={classes.inputLabel}>Product info:</div>
              <CssTextField
                className={classes.textarea}
                style={{ marginTop: ".5rem" }}
                required
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <CssTextField
                className={classes.textarea}
                required
                id="description"
                label="Description"
                variant="outlined"
                multiline
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <CssTextField
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

              <CssTextField
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
              <CssTextField
                required
                id="capacity"
                label="Capacity"
                variant="outlined"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />

              <div className={classes.inputLabel}>Product image:</div>
              {uploading ? (
                <Loader />
              ) : (
                <img src={image} alt={name} className={classes.imagePreview} />
              )}
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                hidden
                onChange={uploadFileHandler}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.uploadBtn}
                >
                  Add image
                </Button>
              </label>

              <FormControl
                variant="outlined"
                color="secondary"
                className={classes.formControl}
              >
                <label
                  htmlFor="demo-simple-select-outlined"
                  className={classes.inputLabel}
                >
                  Categories:
                </label>
                <NativeSelect
                  id="demo-simple-select-outlined"
                  value={""}
                  input={<CssSelect />}
                  onChange={categoryHandler}
                  label="Add category"
                >
                  <option value="" disabled>
                    +
                  </option>
                  {rootCategories.map((cat, i) => (
                    <option key={i} value={cat[1]}>
                      {cat[0]}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
              <div className={classes.chipContainer}>
                {category.length > 0 &&
                  category.map((cat, i) => (
                    <Chip key={i} label={cat} className={classes.chip} />
                  ))}
                {category.length > 0 && (
                  <Tooltip title="Clear" placement="top-start">
                    <IconButton onClick={() => setCategory([])}>
                      <DeleteIcon className={classes.deleteIcon} />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <div className={classes.inputLabel}>Optional info:</div>
              <CssTextField
                id="countryOfOrigin"
                label="Country of origin"
                variant="outlined"
                value={countryOfOrigin}
                onChange={(e) => setCountryOfOrigin(e.target.value)}
              />
              <CssTextField
                id="brand"
                label="Brand"
                variant="outlined"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
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
                <span className={classes.checkboxLabel}>Public</span>
              </div>
              <Button type="submit" className={classes.submitBtn}>
                Save product
              </Button>
            </>
          )}
        </form>
      </main>
    </div>
  )
}

export default ProductCreateScreen

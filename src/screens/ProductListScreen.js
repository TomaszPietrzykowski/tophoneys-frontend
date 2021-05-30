import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { IconButton, Button, Tooltip } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Message from "../components/Message"
import Loader from "../components/Loader"
import DeleteIcon from "@material-ui/icons/Delete"
import CancelIcon from "@material-ui/icons/CloseRounded"
import CheckIcon from "@material-ui/icons/Check"
import EditIcon from "@material-ui/icons/Edit"
import { deleteProduct, listProducts } from "../actions/productActions"
import Paginate from "../components/Paginate"
import AddIcon from "@material-ui/icons/AddRounded"

const StyledTableCell = withStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    color: theme.palette.text.secondary,
    fontSize: ".9rem",
    border: "none",
    outline: "none",
    whiteSpace: "nowrap",
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(0,0,0,.02)",
    },
  },
}))(TableRow)

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    padding: "3rem",
    fontWeight: 300,
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 0",
    position: "relative",
  },
  adminBadge: {
    ...theme.utils.adminBadge,
    color: theme.palette.secondary.light,
  },
  btnRoot: {
    ...theme.flex.row,
    justifyContent: "space-between",
    marginBottom: "5rem",
  },
  btnContainer: {
    // border: "1px solid magenta",
  },
  newBtn: {
    ...theme.buttons.primary,
    minWidth: 100,
    margin: 0,
    padding: ".5rem 2rem .4rem 1rem",
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
      flex: 1,
      padding: ".3rem",
    },
  },
  addIcon: {
    fontSize: "1.4rem",
    marginRight: ".5rem",
    // marginBottom: ".2rem",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "1rem",
    // },
  },
  deco: {
    position: "relative",
    padding: "0 3rem",
    "&::before": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
    },
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
    },
  },
  tableContainer: {
    width: "100%",
    overflowX: "scroll",
  },
  head: {
    padding: ".5rem 1rem",
    textTransform: "uppercase",
    position: "relative",
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.light}, transparent)`,
    },
  },
  center: {
    textAlign: "center",
  },
  checkIcon: {
    fontSize: ".9rem",
    color: theme.palette.common.success,
  },
  cancelIcon: {
    fontSize: ".9rem",
    color: "red",
  },
  editIconBtn: {
    fontSize: ".9rem",
    color: theme.palette.text.secondary,
    "&:hover $editIcon": {
      color: theme.palette.secondary.main,
    },
  },
  editIcon: {
    fontSize: ".9rem",
    color: theme.palette.text.secondary,
  },
  deleteIconBtn: {
    fontSize: ".9rem",
    color: theme.palette.text.secondary,
    "&:hover $deleteIcon": {
      color: theme.palette.secondary.main,
    },
  },
  deleteIcon: {
    fontSize: ".9rem",
    color: theme.palette.text.secondary,
  },
}))

const ProductListScreen = ({ history, match }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // STATE
  const userInfo = useSelector((state) => state.userLogin.userInfo)

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete
  const pageNumber = match.params.pageNumber || 1
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts(pageNumber))
    } else {
      history.push("/login")
    }
  }, [dispatch, history, userInfo, successDelete, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id))
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.btnRoot}>
        <h1 className={classes.title}>
          Products<span className={classes.adminBadge}>Admin</span>
        </h1>
        <div className={classes.btnContainer}>
          <Button
            component={Link}
            to="/admin/createproduct"
            className={classes.newBtn}
          >
            <AddIcon className={classes.addIcon} />
            New
          </Button>
        </div>
      </div>
      {loading || loadingDelete ? (
        <Loader />
      ) : error ? (
        <Message variant="error" message={error} />
      ) : errorDelete ? (
        <Message variant="error" message={errorDelete} />
      ) : (
        <div className={classes.deco}>
          <div className={classes.tableContainer}>
            <Table className={classes.table}>
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell className={classes.head}>
                    Product Id
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Price
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Sale
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Public
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Actions
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <div style={{ marginTop: "1rem" }} />
              <TableBody>
                {products.map((product) => (
                  <StyledTableRow key={product._id}>
                    <StyledTableCell component="th" scope="row">
                      {product._id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Link to={`/product/${product._id}`}>{product.name}</Link>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      &euro;&nbsp;{product.price.toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      className={classes.center}
                    >
                      {product.isPromo ? (
                        <CheckIcon className={classes.checkIcon} />
                      ) : (
                        <CancelIcon className={classes.cancelIcon} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      className={classes.center}
                    >
                      {product.isPublished ? (
                        <CheckIcon className={classes.checkIcon} />
                      ) : (
                        <CancelIcon className={classes.cancelIcon} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Tooltip title="Edit" placement="top-start">
                        <Link to={`/admin/product/${product._id}/edit`}>
                          <IconButton className={classes.editIconBtn}>
                            <EditIcon className={classes.editIcon} />
                          </IconButton>
                        </Link>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top-start">
                        <IconButton
                          onClick={() => deleteHandler(product._id)}
                          className={classes.deleteIconBtn}
                        >
                          <DeleteIcon className={classes.deleteIcon} />
                        </IconButton>
                      </Tooltip>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Paginate id={"productlist"} page={page} pages={pages} url="admin" />
        </div>
      )}
    </div>
  )
}

export default ProductListScreen

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Button, Tooltip, Grid } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Message from "../components/Message";
import Loader from "../components/Loader";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { listProducts } from "../actions/productActions";

const StyledTableCell = withStyles((theme) => ({
  root: {
    ...theme.typography.source,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    marginTop: "15rem",
  },
  tableContainer: {
    overflowX: "scroll",
  },
  table: {
    minWidth: 650,
  },
  checkIcon: {
    fontSize: ".9rem",
    color: "green",
  },
  cancelIcon: {
    fontSize: ".9rem",
    color: "red",
  },
  editIcon: {
    fontSize: ".9rem",
    color: "blue",
  },
  deleteIcon: {
    fontSize: ".9rem",
    color: "red",
  },
}));

const ProductListScreen = ({ history, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // STATE
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // delete products dispatch
    }
  };

  const createProductHandler = () => {
    console.log("create product called");
  };

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item>
          <h1>Products</h1>
        </Grid>
        <Grid item>
          <Button onClick={createProductHandler}>Create product</Button>
        </Grid>
      </Grid>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error" message={error} />
      ) : (
        <div className={classes.tableContainer}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>NAME</StyledTableCell>
                  <StyledTableCell>PRICE</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <StyledTableCell component="th" scope="row">
                      {product._id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {product.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      &euro; {product.price}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Tooltip title="Edit" placement="top-start">
                        <Link to={`/admin/product/${product._id}/edit`}>
                          <IconButton>
                            <EditIcon className={classes.editIcon} />
                          </IconButton>
                        </Link>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top-start">
                        <IconButton onClick={() => deleteHandler(product._id)}>
                          <DeleteIcon className={classes.deleteIcon} />
                        </IconButton>
                      </Tooltip>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default ProductListScreen;

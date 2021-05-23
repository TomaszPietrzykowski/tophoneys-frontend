import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, Tooltip } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Message from "../components/Message"
import Loader from "../components/Loader"
import CancelIcon from "@material-ui/icons/Cancel"
import { listOrders } from "../actions/orderActions"

const StyledTableCell = withStyles((theme) => ({
  root: {
    ...theme.typography.source,
  },
}))(TableCell)

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
  button: {
    fontSize: ".8rem",
    color: "white",
  },
}))

const OrderListScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // STATE
  const userInfo = useSelector((state) => state.userLogin.userInfo)

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push("/login")
    }
  }, [dispatch, history, userInfo])

  return (
    <div className={classes.container}>
      <h1>Orders</h1>
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
                  <StyledTableCell>USER</StyledTableCell>
                  <StyledTableCell>DATE</StyledTableCell>
                  <StyledTableCell>TOTAL</StyledTableCell>
                  <StyledTableCell>PAID</StyledTableCell>
                  <StyledTableCell>SENT</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order._id}>
                    <StyledTableCell component="th" scope="row">
                      {order._id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.user && order.user.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.createdAt.substring(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.totalPrice}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <CancelIcon className={classes.cancelIcon} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <CancelIcon className={classes.cancelIcon} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Tooltip title="View order" placement="top-start">
                        <Link to={`/order/${order._id}`}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                          >
                            Details
                          </Button>
                        </Link>
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
  )
}

export default OrderListScreen

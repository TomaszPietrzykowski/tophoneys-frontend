import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Tooltip } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import IconButton from "@material-ui/core/IconButton"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Message from "../components/Message"
import Loader from "../components/Loader"
import DetailsIcon from "@material-ui/icons/MenuOpenRounded"
import { listOrders } from "../actions/orderActions"

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
  },
  header: {
    ...theme.flex.rowStart,
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
    position: "relative",
  },
  adminBadge: {
    ...theme.utils.adminBadge,
    color: theme.palette.secondary.light,
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
  info: {
    fontSize: ".8rem",
    textTransform: "uppercase",
  },
  success: {
    fontSize: ".8rem",
    color: theme.palette.common.success,
  },
  checkIcon: {
    fontSize: ".9rem",
    color: "green",
  },
  cancelIcon: {
    fontSize: ".9rem",
    color: "red",
  },
  detailsBtn: {
    marginLeft: ".5rem",
  },
  detailsIcon: {
    color: theme.palette.text.disabled,
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
      <div className={classes.header}>
        <h1 className={classes.title}>
          Orders<span className={classes.adminBadge}>Admin</span>
        </h1>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error" message={error} />
      ) : (
        <div className={classes.deco}>
          <div className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell className={classes.head}>Id</StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    User
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Date
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    TOTAL
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Paid
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Sent
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Details
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <div style={{ marginTop: "1rem" }} />
              <TableBody>
                {orders.map((order) => (
                  <StyledTableRow key={order._id}>
                    <StyledTableCell component="th" scope="row">
                      {order._id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.user && order.user.name}
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ fontSize: ".8rem" }}
                    >
                      {order.createdAt.substring(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.totalPrice}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.isPaid ? (
                        <span className={classes.success}>
                          {order.paidAt.substring(0, 10)}
                        </span>
                      ) : (
                        <span className={classes.info}>Not paid</span>
                      )}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {order.isDelivered ? (
                        <span className={classes.success}>
                          {order.deliveredAt.substring(0, 10)}
                        </span>
                      ) : (
                        <span className={classes.info}>Not sent</span>
                      )}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Tooltip title="View order" placement="top-start">
                        <Link to={`/order/${order._id}`}>
                          <IconButton className={classes.detailsBtn}>
                            <DetailsIcon className={classes.detailsIcon} />
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderListScreen

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
import Loader from "../components/ui/Loader"
import DetailsIcon from "@material-ui/icons/MenuOpenRounded"
import { listOrders } from "../actions/orderActions"
import Paginate from "../components/Paginate"

const StyledTableCell = withStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    color: theme.palette.text.secondary,
    fontSize: ".9rem",
    border: "none",
    outline: "none",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      padding: ".3rem .6rem",
    },
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
    [theme.breakpoints.down("sm")]: {
      padding: "1rem .5rem 0",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      margin: "3rem .5rem",
    },
  },
  adminBadge: {
    ...theme.utils.adminBadge,
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".85rem",
      right: "-3.3rem",
    },
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
    [theme.breakpoints.down("sm")]: {
      padding: "0 .5rem",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      padding: ".4rem 1rem",
    },
  },
  info: {
    fontSize: ".8rem",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      padding: ".3rem .6rem",
    },
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

const OrderListScreen = ({ match, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // STATE
  const userInfo = useSelector((state) => state.userLogin.userInfo)
  const { loading, error, orders, page, pages } = useSelector(
    (state) => state.orderList
  )

  const pageNumber = match.params.pageNumber || 1

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders(pageNumber))
    } else {
      history.push("/login")
    }
  }, [dispatch, history, userInfo, pageNumber])

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
                  <StyledTableCell className={classes.head}>
                    Order Id
                  </StyledTableCell>
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
          <Paginate id={"orderlist"} page={page} pages={pages} url="admin" />
        </div>
      )}
    </div>
  )
}

export default OrderListScreen

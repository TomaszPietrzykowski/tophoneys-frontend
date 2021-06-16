import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// mui
import { IconButton, Tooltip } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import CancelIcon from "@material-ui/icons/CloseRounded"
import CheckIcon from "@material-ui/icons/Check"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
// custom
import { listUsers, deleteUser } from "../actions/userActions"
import Message from "../components/Message"
import Loader from "../components/ui/Loader"

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
      background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background})`,
    },
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,
      background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background})`,
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
      background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.light}, ${theme.palette.common.background})`,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      padding: ".4rem 1rem",
    },
  },
  table: {
    minWidth: 650,
  },
  mail: {
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  center: {
    paddingLeft: "2rem",
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

const UserListScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // STATE
  const userInfo = useSelector((state) => state.userLogin.userInfo)

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push("/login")
    }
  }, [dispatch, history, userInfo, successDelete])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>
          Users<span className={classes.adminBadge}>Admin</span>
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
                    User id
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Email
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Admin
                  </StyledTableCell>
                  <StyledTableCell className={classes.head}>
                    Actions
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <div style={{ marginTop: "1rem" }} />
              <TableBody>
                {users.map((user) => (
                  <StyledTableRow key={user._id}>
                    <StyledTableCell component="th" scope="row">
                      {user._id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <a href={`mailto:${user.email}`} className={classes.mail}>
                        {user.email}
                      </a>
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      className={classes.center}
                    >
                      {user.isAdmin ? (
                        <CheckIcon className={classes.checkIcon} />
                      ) : (
                        <CancelIcon className={classes.cancelIcon} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Tooltip title="Edit" placement="top-start">
                        <Link to={`/admin/user/${user._id}/edit`}>
                          <IconButton className={classes.editIconBtn}>
                            <EditIcon className={classes.editIcon} />
                          </IconButton>
                        </Link>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top-start">
                        <IconButton
                          onClick={() => deleteHandler(user._id)}
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
        </div>
      )}
    </div>
  )
}

export default UserListScreen

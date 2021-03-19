import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
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
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { listUsers, deleteUser } from "../actions/userActions";

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

const UserListScreen = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // STATE
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className={classes.container}>
      <h1>Users</h1>
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
                  <StyledTableCell>EMAIL</StyledTableCell>
                  <StyledTableCell>ADMIN</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <StyledTableCell component="th" scope="row">
                      {user._id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Link to={`mailto:${user.email}`}>{user.email}</Link>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {user.isAdmin ? (
                        <CheckIcon className={classes.checkIcon} />
                      ) : (
                        <CancelIcon className={classes.cancelIcon} />
                      )}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Tooltip title="Edit" placement="top-start">
                        <Link to={`/admin/user/${user._id}/edit`}>
                          <IconButton>
                            <EditIcon className={classes.editIcon} />
                          </IconButton>
                        </Link>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top-start">
                        <IconButton onClick={() => deleteHandler(user._id)}>
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

export default UserListScreen;

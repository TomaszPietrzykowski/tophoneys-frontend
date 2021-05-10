import React from "react"
import Pagination from "@material-ui/lab/Pagination"
import PaginationItem from "@material-ui/lab/PaginationItem"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const Paginate = ({ id, page, pages, url }) => {
  const classes = useStyles()

  return (
    pages > 1 && (
      <div className={classes.root}>
        <Pagination
          count={pages}
          page={page}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${url}/${id}/page/${item.page}`}
              {...item}
            />
          )}
        />
      </div>
    )
  )
}

export default Paginate

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import { Link } from "react-router-dom"
import getCategoryLabel from "./GetCategoryLabel"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  link: {
    fontSize: ".8rem",
    textTransform: "uppercase",
    color: theme.palette.text.disabled,
    "&:hover": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
    },
  },
}))

const CustomBreadcrumbs = ({ category }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {category &&
          category.length > 0 &&
          category.map((cat) => (
            <Link className={classes.link} to={`/category/${cat}`} key={cat}>
              {getCategoryLabel(cat)}
            </Link>
          ))}
      </Breadcrumbs>
    </div>
  )
}

export default CustomBreadcrumbs

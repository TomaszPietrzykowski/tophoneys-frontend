import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import { Link } from "react-router-dom"
import getCategoryLabel from "./GetCategoryLabel"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1400,
    margin: "auto",
    padding: "1rem 3rem",
  },
  link: {
    fontSize: ".8rem",
    textTransform: "uppercase",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
}))

const CustomBreadcrumbs = ({ category }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {category.map((cat) => (
          <Link className={classes.link} to={`/category/${cat}`} key={cat}>
            {getCategoryLabel(cat)}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}

export default CustomBreadcrumbs

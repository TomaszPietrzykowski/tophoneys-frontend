import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ProductsSlider from "./ProductsSlider"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.typography.mont,
    width: "100%",
    // maxHeight: 300,
  },
  header: {
    ...theme.flex.row,
    width: "100%",
    marginTop: "2rem",
    padding: "1.8rem 1.8rem 0 0",

    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 2,
      background: `linear-gradient(90deg, ${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background} )`,
      opacity: 0.7,
      [theme.breakpoints.down("sm")]: {
        height: 1,
      },
    },
  },
  title: {
    // flex: 1,
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    padding: "2rem 3rem",
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
    },
  },
  margin: {
    // flex: 2,
    // border: "1px solid orange",
  },
}))

const RelatedProducts = ({ category }) => {
  const classes = useStyles()
  return category && category.length > 0 ? (
    <div className={classes.container}>
      <Grid container className={classes.header}>
        <Grid item xs={12} md={4} lg={4} className={classes.title}>
          <div className={classes.filler}>
            <p className={classes.descriptionHeader}>Related Products</p>
          </div>
        </Grid>
        <Grid item xs={12} md={8} lg={8} className={classes.margin}>
          <div className={classes.filler}>
            <p className={classes.description}> </p>
          </div>
        </Grid>
      </Grid>
      <ProductsSlider
        title=""
        endpoint={category[0]}
        timeout={10000}
        hideHeader={true}
      />
    </div>
  ) : null
}

export default RelatedProducts

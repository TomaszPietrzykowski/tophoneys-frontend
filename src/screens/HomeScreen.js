import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Search from "../components/ui/Search"
import Showcase from "../components/ui/Showcase"
import Teasers from "../components/ui/Teasers"
import Featured from "../components/Featured"
import ProductsSlider from "../components/ProductsSlider"
import PromoLinks from "../components/PromoLinks"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    marginTop: 150,
    padding: "15px",
    [theme.breakpoints.down("md")]: {
      marginTop: 130,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 90,
    },
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <main className={classes.container}>
      <PromoLinks />
      <Search isMobile={true} />
      <Showcase />
      <Featured />
      <Teasers />
      <ProductsSlider title="Nowa dostawa" endpoint={"new"} />
      <ProductsSlider title="Promocje" endpoint={"promo"} />
    </main>
  )
}

export default Home

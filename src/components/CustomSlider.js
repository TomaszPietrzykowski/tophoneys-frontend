import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import ProductTab from "./ProductTab"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    overflow: "hidden",
  },
}))

const CustomSlider = ({ timeout, slidesAtOnce, products }) => {
  const classes = useStyles()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const slider = setInterval(playSlides, timeout)
    return () => {
      clearInterval(slider)
    }
    // eslint-disable-next-line
  }, [index])

  const playSlides = () => {
    setIndex(index >= products.length - slidesAtOnce ? 0 : index + 1)
  }

  return (
    <div className={classes.container}>
      {products.map((product, i) => (
        <ProductTab
          key={i}
          activeIndex={index}
          slidesAtOnce={slidesAtOnce}
          img={product.img}
          title={product.name}
          description={product.shortDescription}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default CustomSlider

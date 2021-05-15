import React from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    fontSize: "1rem",
  },
}))

const Counter = ({ max, count, setCount }) => {
  const classes = useStyles()
  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <ButtonGroup
      size="small"
      aria-label="small outlined button group"
      className={classes.root}
    >
      <Button
        disabled={count <= 1}
        className={classes.btn}
        onClick={handleDecrement}
      >
        -
      </Button>
      <Button disabled className={classes.btn}>
        {count}
      </Button>
      <Button
        disabled={count >= max}
        className={classes.btn}
        onClick={handleIncrement}
      >
        +
      </Button>
    </ButtonGroup>
  )
}

export default Counter

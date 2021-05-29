import React from "react"
import { makeStyles } from "@material-ui/styles"
import CheckIcon from "@material-ui/icons/CheckRounded"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1400,
    margin: "auto",
    padding: "3rem 3rem 2rem",
    ...theme.typography.mont,
    opacity: 0.8,
    // border: "1px solid green",
  },
  containerPassive: {
    ...theme.flex.row,
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginBottom: "2rem",
    ...theme.typography.mont,
    // border: "1px solid magenta",
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.text.disabled,
      opacity: 0.7,
      position: "absolute",
      top: "calc(50% - 1px)",
      width: "50%",
      height: 2,
      zIndex: -2,
    },
    "&::after": {
      content: "''",
      backgroundColor: theme.palette.text.disabled,
      opacity: 0.7,
      position: "absolute",
      top: "calc(50% - 1px)",
      right: 0,
      width: "50%",
      height: 2,
      zIndex: -2,
    },
  },
  container: {
    ...theme.flex.row,
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginBottom: "2rem",
    ...theme.typography.mont,
    // border: "1px solid magenta",
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.secondary.light,
      position: "absolute",
      top: "calc(50% - 1px)",
      width: "50%",
      height: 2,
      zIndex: -2,
    },
    "&::after": {
      content: "''",
      backgroundColor: theme.palette.text.disabled,
      opacity: 0.7,
      position: "absolute",
      top: "calc(50% - 1px)",
      right: 0,
      width: "50%",
      height: 2,
      zIndex: -2,
    },
  },
  containerActive: {
    ...theme.flex.row,
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginBottom: "2rem",
    ...theme.typography.mont,
    // border: "1px solid magenta",
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.secondary.light,
      position: "absolute",
      top: "calc(50% - 1px)",
      width: "50%",
      height: 2,
      zIndex: -2,
    },
    "&::after": {
      content: "''",
      backgroundColor: theme.palette.secondary.light,
      position: "absolute",
      top: "calc(50% - 1px)",
      right: 0,
      width: "50%",
      height: 2,
      zIndex: -2,
    },
  },
  circle: {
    ...theme.flex.col,
    padding: ".5rem",
    backgroundColor: "white",
    color: theme.palette.text.disabled,
    border: `2px solid ${theme.palette.text.disabled}`,
    width: 30,
    height: 30,
    borderRadius: "50%",
    position: "relative",
    fontSize: ".85rem",
  },
  circleActive: {
    fontSize: ".85rem",
    ...theme.flex.col,
    padding: ".5rem",
    backgroundColor: "white",
    color: theme.palette.secondary.light,
    border: `2px solid ${theme.palette.secondary.light}`,
    width: 30,
    height: 30,
    borderRadius: "50%",
    position: "relative",
  },
  label: {
    fontSize: ".85rem",
    textTransform: "uppercase",
    position: "absolute",
    minWidth: "100%",
    textAlign: "center",
    bottom: "-100%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "inherit",
    // border: "1px solid orange",
  },
  // container: {
  //   ...theme.utils.container,
  //   ...theme.typography.mont,
  //   paddingTop: "3rem",
  // },
  // nav: {
  //   ...theme.flex.row,
  //   listStyle: "none",
  //   "& > *": {
  //     padding: ".5rem 2rem",
  //   },
  // },
  // liActive: {
  //   ...theme.flex.col,
  //   color: theme.palette.primary.light,
  // },
  // liDisabled: {
  //   ...theme.flex.row,
  //   color: theme.palette.text.disabled,
  // },
  // circleActive: {
  //   ...theme.flex.col,
  //   padding: ".5rem",
  //   backgroundColor: "white",
  //   color: theme.palette.primary.light,
  //   border: `2px solid ${theme.palette.primary.light}`,
  //   width: 30,
  //   height: 30,
  //   borderRadius: "50%",
  // },
  // circleDisabled: {
  //   ...theme.flex.col,
  //   padding: ".5rem",
  //   backgroundColor: "white",
  //   border: `2px solid ${theme.palette.text.disabled}`,
  //   color: theme.palette.text.disabled,
  //   width: 30,
  //   height: 30,
  //   borderRadius: "50%",
  // },
  check: {
    fontSize: "1.2rem",
  },
  // link: {
  //   textDecoration: "none",
  //   padding: ".5rem 2rem",
  // },
  // stepContainerActive: {
  //   width: "100%",
  //   border: "1px solid blue",
  //   position: "relative",
  //   "&::before": {
  //     content: "''",
  //     backgroundColor: theme.palette.primary.light,
  //     position: "absolute",
  //     top: "calc(50% - 1px)",
  //     width: "100%",
  //     height: "2px",
  //     zIndex: -2,
  //   },
  // },
  // stepContainerDisabled: {
  //   border: "1px solid blue",
  //   position: "relative",
  //   "&::before": {
  //     content: "''",
  //     backgroundColor: theme.palette.text.disabled,
  //     position: "absolute",
  //     top: "calc(50% - 1px)",
  //     width: "100%",
  //     height: "2px",
  //     zIndex: -2,
  //   },
  // },
  // span: {
  //   border: "1px solid red",
  //   padding: "0 .5rem",
  //   fontSize: ".9rem",
  //   fontWeight: 300,
  //   backgroundColor: "white",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none",
  //   },
  // },
}))

const CheckoutSteps = ({ step1, step2, step3 }) => {
  const classes = useStyles()

  return (
    // <div className={classes.container}>
    //   <ul className={classes.nav}>
    //     {step1 ? (
    //       <>
    //         <li className={classes.liActive}>
    //           <div className={classes.stepContainerActive}>
    //             <div className={classes.circleActive}>
    //               {step2 ? <CheckIcon className={classes.check} /> : "1"}
    //             </div>
    //           </div>
    //           <span className={classes.span}>Shipping</span>
    //         </li>
    //       </>
    //     ) : (
    //       <div className={classes.stepContainerDisabled}>
    //         <li className={classes.liDisabled}>
    //           <div className={classes.circleDisabled}>1</div>
    //           <span className={classes.span}>Shipping</span>
    //         </li>
    //       </div>
    //     )}
    //     {step2 ? (
    //       <div className={classes.stepContainerActive}>
    //         <li className={classes.liActive}>
    //           <div className={classes.circleActive}>
    //             {step3 ? <CheckIcon className={classes.check} /> : "2"}
    //           </div>
    //           <span className={classes.span}>Place order</span>
    //         </li>
    //       </div>
    //     ) : (
    //       <div className={classes.stepContainerDisabled}>
    //         <li className={classes.liDisabled}>
    //           <div className={classes.circleDisabled}>2</div>
    //           <span className={classes.span}>Place order</span>
    //         </li>
    //       </div>
    //     )}
    //     {step3 ? (
    //       <div>
    //         <li className={classes.liActive}>
    //           <div className={classes.circleActive}>3</div>
    //           <span className={classes.span}>Pay</span>
    //         </li>
    //       </div>
    //     ) : (
    //       <div>
    //         <li className={classes.liDisabled}>
    //           <div className={classes.circleDisabled}>3</div>
    //           <span className={classes.span}>Pay</span>
    //         </li>
    //       </div>
    //     )}
    //   </ul>
    // </div>
    <div className={classes.root}>
      {step2 ? (
        step3 ? (
          <div className={classes.containerActive}>
            <div className={classes.circleActive}>
              <CheckIcon className={classes.check} />
              <span className={classes.label}>Shipping</span>
            </div>

            <div className={classes.circleActive}>
              <CheckIcon className={classes.check} />
              <span className={classes.label}>Order</span>
            </div>

            <div className={classes.circleActive}>
              3<span className={classes.label}>Pay</span>
            </div>
          </div>
        ) : (
          <div className={classes.container}>
            <div className={classes.circleActive}>
              <CheckIcon className={classes.check} />
              <span className={classes.label}>Shipping</span>
            </div>

            <div className={classes.circleActive}>
              2<span className={classes.label}>Order</span>
            </div>
            <div className={classes.circle}>
              3<span className={classes.label}>Pay</span>
            </div>
          </div>
        )
      ) : (
        <div className={classes.containerPassive}>
          <div className={classes.circleActive}>
            1<span className={classes.label}>Shipping</span>
          </div>
          <div className={classes.circle}>
            2<span className={classes.label}>Order</span>
          </div>
          <div className={classes.circle}>
            3<span className={classes.label}>Pay</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutSteps

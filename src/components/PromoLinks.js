import React from "react"
import { makeStyles } from "@material-ui/styles"
import TruckIcon from "@material-ui/icons/LocalShipping"
import TimerIcon from "@material-ui/icons/Timer"
import GiftIcon from "@material-ui/icons/Redeem"
import SecurityIcon from "@material-ui/icons/Security"
import Slider from "@farbenmeer/react-spring-slider"
import { useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "15px",
    ...theme.typography.prosto,
    // color: theme.palette.text.secondary,
    color: "rgba(0,0,0,.7)",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 0,
    },
  },
  desktopLinks: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0px",
    borderBottom: "1px solid #eee",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  desktopTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    mihHeight: "2rem",
    textAlign: "center",
    fontSize: 13,
  },
  desktopIcon: {
    color: theme.palette.primary.main,
    fontSize: 16,
    marginRight: "0.4rem",
  },
  mobileLinks: {
    "& > :first-child": {
      height: "30px !important",
    },
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "10px 0 0 0",
    borderBottom: "1px solid #eee",
    minHeight: "2rem",
  },

  mobileTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 13,
    width: "auto",
  },
  tabletTab: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}))

const PromoLinks = () => {
  const classes = useStyles()
  const isTablet = useMediaQuery("(max-width: 990px)")
  const isMobile = useMediaQuery("(max-width: 600px)")

  return (
    <div className={classes.container}>
      {isTablet ? (
        isMobile ? ( // ------------------------------------------------  mobile styles V  V  V
          <div className={classes.mobileLinks}>
            <Slider auto={4000} slidesAtOnce={1}>
              <div className={classes.mobileTab}>
                <TimerIcon className={classes.desktopIcon} />
                <div className={classes.desktopText}>
                  Fast delivery 2-4 days
                </div>
              </div>
              <div className={classes.mobileTab}>
                <TruckIcon className={classes.desktopIcon} />
                <div className={classes.desktopText}>
                  Free delivery from &euro; 39
                </div>
              </div>
              <div className={classes.mobileTab}>
                <GiftIcon className={classes.desktopIcon} />
                <div className={classes.desktopText}>
                  Extra gift from &euro; 60
                </div>
              </div>
              <div className={classes.mobileTab}>
                <SecurityIcon className={classes.desktopIcon} />
                <div className={classes.desktopText}>
                  Secure shopping via SSL
                </div>
              </div>
            </Slider>
          </div>
        ) : (
          // --------------------------------------------------------------  tablet styles V  V  V
          <div className={classes.mobileLinks}>
            <Slider auto={4000} slidesAtOnce={1} reset>
              <div className={classes.tabletTab}>
                <div className={classes.mobileTab}>
                  <TimerIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Fast delivery 2-4 days
                  </div>
                </div>
                <div className={classes.mobileTab}>
                  <TruckIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Free delivery from &euro; 39
                  </div>
                </div>
              </div>
              <div className={classes.tabletTab}>
                <div className={classes.mobileTab}>
                  <GiftIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Extra gift from &euro; 60
                  </div>
                </div>
                <div className={classes.mobileTab}>
                  <SecurityIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Secure shopping via SSL
                  </div>
                </div>
              </div>
              <div className={classes.tabletTab}>
                <div className={classes.mobileTab}>
                  <TimerIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Fast delivery 2 - 4 days
                  </div>
                </div>
                <div className={classes.mobileTab}>
                  <TruckIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Free delivery from &euro; 39
                  </div>
                </div>
              </div>
              <div className={classes.tabletTab}>
                <div className={classes.mobileTab}>
                  <GiftIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Extra gift from &euro; 60
                  </div>
                </div>
                <div className={classes.mobileTab}>
                  <SecurityIcon className={classes.desktopIcon} />
                  <div className={classes.desktopText}>
                    Secure shopping via SSL
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        )
      ) : (
        // -------------------------------------------------------------------   desktop styles V V V
        <div className={classes.desktopLinks}>
          <div className={classes.desktopTab}>
            <TimerIcon className={classes.desktopIcon} />
            <div className={classes.desktopText}>Fast delivery 2-4 days</div>
          </div>
          <div className={classes.desktopTab}>
            <TruckIcon className={classes.desktopIcon} />
            <div className={classes.desktopText}>
              Free delivery from &euro; 39
            </div>
          </div>
          <div className={classes.desktopTab}>
            <GiftIcon className={classes.desktopIcon} />
            <div className={classes.desktopText}>Extra gift from &euro; 60</div>
          </div>
          <div className={classes.desktopTab}>
            <SecurityIcon className={classes.desktopIcon} />
            <div className={classes.desktopText}>Secure shopping via SSL</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PromoLinks

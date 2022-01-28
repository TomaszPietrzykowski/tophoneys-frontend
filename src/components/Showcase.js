import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import bannerMobile from "../assets/mainbanner2022mobile.jpg";
import bannerDesktop from "../assets/mainbanner2022desktop.jpg";
// import bannerMobile from "../assets/main-banner-mobile.jpeg"
// import bannerDesktop from "../assets/main-banner-desktop.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 3rem 3rem",
    minHeight: 420,
    width: "100%",
    height: "auto",
    borderRadius: 7,
  },
  containerMobile: {
    padding: "0px 15px",
    width: "100%",
    height: "auto",
    borderRadius: 7,
  },
  banner: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
}));

const Showcase = () => {
  const isTablet = useMediaQuery("(max-width:860px)");
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const banner = isMobile ? bannerMobile : bannerDesktop;

  return (
    <div className={isTablet ? classes.containerMobile : classes.container}>
      <Link to="/category/sale">
        <img src={banner} alt="I love TOP HONEYS" className={classes.banner} />
      </Link>
    </div>
  );
};

export default Showcase;

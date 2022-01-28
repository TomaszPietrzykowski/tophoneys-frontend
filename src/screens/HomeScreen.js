import React from "react";
// mui
import { makeStyles } from "@material-ui/core/styles";
// custom
import Search from "../components/ui/Search";
import Showcase from "../components/Showcase";
// import Teasers from "../components/Teasers";
import Teasers2022 from "../components/Teasers2022";
import Featured from "../components/Featured";
import ProductsSlider from "../components/ProductsSlider";
import InfoLinks from "../components/InfoLinks";
import SecondaryBanner from "../components/SecondaryBanner";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <InfoLinks />
      <Search isMobile={true} />
      <Showcase />
      <Featured />
      <Teasers2022 />
      <ProductsSlider title="New delivery" endpoint={"new"} timeout={10000} />
      <SecondaryBanner />
      <ProductsSlider title="Sale" endpoint={"sale"} timeout={8000} />
    </main>
  );
};

export default Home;

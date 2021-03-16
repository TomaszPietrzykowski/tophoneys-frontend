import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/Theme";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "./components/ui/Header";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
// import Newsletter from "./components/ui/Newsletter";
// import Footer from "./components/ui/Footer";
// import DevTag from "./components/ui/DevTag";
// import BottomNav from "./components/ui/BottomNav";
// import BottomNavMargin from "./components/ui/BottomNavMargin";

function App() {
  // const isMobile = useMediaQuery("(max-width:600px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          <Switch>
            <Route path="/category" component={CategoryScreen} exact />
            <Route path="/category/:id" component={CategoryScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/profile" component={ProfileScreen} exact />
            <Route path="/shipping" component={ShippingScreen} exact />
            <Route path="/paymentmethod" component={PaymentScreen} exact />
            <Route path="/placeorder" component={PlaceOrderScreen} exact />
            <Route path="/order/:id" component={OrderScreen} exact />
            <Route path="/" component={HomeScreen} exact />
            {/* <Newsletter />
        <Footer />
        {isMobile && (
          <Fragment>
            <BottomNavMargin />
            <BottomNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </Fragment>
        )} */}
          </Switch>
        </Fragment>
      </Router>
    </ThemeProvider>
  );
}

export default App;

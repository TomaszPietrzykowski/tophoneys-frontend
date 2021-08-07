import React, { Fragment, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// mui
import { ThemeProvider } from "@material-ui/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
// legal
import CookieConsent from "react-cookie-consent"
//custom
import theme from "./components/Theme"
import Header from "./components/ui/Header"
import Footer from "./components/ui/Footer"
import BottomNav from "./components/ui/BottomNav"
import BottomNavMargin from "./components/ui/BottomNavMargin"
import ScrollToTop from "./components/ui/ScrollToTop"
import Brands from "./components/Brands"
import NavbarMargin from "./components/ui/NavbarMargin"
// screens
import HomeScreen from "./screens/HomeScreen"
import CategoryScreen from "./screens/CategoryScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ShippingScreen from "./screens/ShippingScreen"
import PlaceOrderScreen from "./screens/PlaceOrderScreen"
import OrderScreenBT from "./screens/OrderScreenBT"
// import OrderScreen from "./screens/OrderScreen"
import UserListScreen from "./screens/UserListScreen"
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from "./screens/ProductListScreen"
import ProductCreateScreen from "./screens/ProductCreateScreen"
import ProductEditScreen from "./screens/ProductEditScreen"
import ContactScreen from "./screens/ContactScreen"
import AboutHoneyScreen from "./screens/AboutHoneyScreen"
import AboutUsScreen from "./screens/AboutUsScreen"
import GeneralConditionsScreen from "./screens/GeneralConditionsScreen"
import OrderListScreen from "./screens/OrderListScreen"
import SearchScreen from "./screens/SearchScreen"
import InfoPaymentScreen from "./screens/InfoPaymentScreen"
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen"
import InfoShippingScreen from "./screens/InfoShippingScreen"

function App() {
  const isMobile = useMediaQuery("(max-width:600px)")
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Fragment>
            <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <NavbarMargin />
            <Switch>
              <Route path="/category/:id" component={CategoryScreen} exact />
              <Route
                path="/category/:id/page/:pageNumber"
                component={CategoryScreen}
                exact
              />
              <Route path="/product/:id" component={ProductScreen} exact />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/contact" component={ContactScreen} exact />
              <Route path="/abouthoney" component={AboutHoneyScreen} exact />
              <Route path="/aboutus" component={AboutUsScreen} exact />
              <Route
                path="/conditions"
                component={GeneralConditionsScreen}
                exact
              />
              <Route path="/privacy" component={PrivacyPolicyScreen} exact />
              <Route path="/payment-info" component={InfoPaymentScreen} exact />
              <Route
                path="/shipping-info"
                component={InfoShippingScreen}
                exact
              />
              <Route path="/login" component={LoginScreen} exact />
              <Route path="/register" component={RegisterScreen} exact />
              <Route path="/profile" component={ProfileScreen} exact />
              <Route path="/shipping" component={ShippingScreen} exact />
              <Route path="/placeorder" component={PlaceOrderScreen} exact />
              {/* <Route path="/order/:id" component={OrderScreen} exact /> */}
              <Route path="/order/:id" component={OrderScreenBT} exact />
              <Route path="/search/:keyword" component={SearchScreen} exact />
              <Route
                path="/search/:keyword/page/:pageNumber"
                component={SearchScreen}
                exact
              />
              <Route path="/admin/userlist" component={UserListScreen} exact />
              <Route
                path="/admin/orderlist"
                component={OrderListScreen}
                exact
              />
              <Route
                path="/admin/orderlist/page/:pageNumber"
                component={OrderListScreen}
                exact
              />
              <Route
                path="/admin/product/:id/edit"
                component={ProductEditScreen}
                exact
              />
              <Route
                path="/admin/createproduct"
                component={ProductCreateScreen}
                exact
              />
              <Route
                path="/admin/productlist"
                component={ProductListScreen}
                exact
              />
              <Route
                path="/admin/productlist/page/:pageNumber"
                component={ProductListScreen}
                exact
              />
              <Route
                path="/admin/user/:id/edit"
                component={UserEditScreen}
                exact
              />
              <Route path="/" component={HomeScreen} exact />
            </Switch>
            <Brands />
            <Footer />
            {isMobile && (
              <Fragment>
                <BottomNavMargin />
                <BottomNav
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                />
              </Fragment>
            )}
            <CookieConsent
              location="bottom"
              buttonText="AGREED"
              cookieName="TopHoneysCookieGranted"
              style={{
                background: "#2B373B",
                padding: "1rem 0",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
                letterSpacing: 1.5,
                lineHeight: 1.5,
              }}
              buttonStyle={{
                color: "#2B373B",
                background: `rgba(215, 170, 14, 1)`,
                borderRadius: 4,
                fontSize: ".9rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                letterSpacing: 1,
                padding: ".5rem 1.6rem",
                marginRight: "2rem",
              }}
              expires={150}
              // overlay
            >
              TOP HONEYS website uses cookies to enhance your e-commerce
              experience.
            </CookieConsent>
          </Fragment>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  )
}

export default App

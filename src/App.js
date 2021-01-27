import React, { Fragment, useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/Theme';
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from './components/ui/Header';
import HomeScreen from './screens/HomeScreen';
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
      <Fragment>
        <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <HomeScreen />
        {/* <Newsletter />
        <Footer />
        {isMobile && (
          <Fragment>
            <BottomNavMargin />
            <BottomNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </Fragment>
        )} */}
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

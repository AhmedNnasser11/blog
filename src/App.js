import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navabr/Navbar';
import Home from './Pages/Home';
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import Footer from "./Components/Footer/Footer.jsx"
import LoadingPage from "./Pages/LoadingPage/LoadingPage"

function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("onload", setLoading(false));
    return () => {
      window.removeEventListener("onload", setLoading(true));
    };
  }, []);

  return (
    <>
    {loading ? (
      <LoadingPage />
    ):(
      <Router>
      <Navbar />
      <ScrollToTop>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
    )}

    </>
  );
}

export default App;

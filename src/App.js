import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navabr/Navbar';
import Home from './Pages/Home';
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import {getUser} from "./features/blog/blogSlice"
import { useDispatch } from 'react-redux';
import Footer from "./Components/Footer/Footer.jsx"
import LoadingPage from "./Pages/LoadingPage/LoadingPage"

function App() {
const dispatch = useDispatch()
const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

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

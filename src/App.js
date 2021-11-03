import React, { useEffect } from 'react';
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

function App() {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
     
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navabr/Navbar';
import Home from './Pages/Home';
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"


function App() {
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

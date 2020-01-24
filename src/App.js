import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./style.css";

import AboutPage from "./components/AboutPage/AboutPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HomePage from "./components/HomePage/HomePage";
import PageNotFound from "./components/404";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/CatalogPage" component={CatalogPage} />
          <Route path="/AboutPage" component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

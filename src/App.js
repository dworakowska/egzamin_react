import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./style.css";

import AboutPage from "./components/AboutPage/AboutPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HomePage from "./components/HomePage/HomePage";
import PageNotFound from "./components/404";
import Header from "./header";
import Footer from "./footer";

import { Provider } from "react-redux";
import store from "./store";
import CartDetails from "./components/CartDetails/CartDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/CatalogPage" component={CatalogPage} />
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/CartDetails" component={CartDetails} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

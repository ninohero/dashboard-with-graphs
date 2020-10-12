import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

export default (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
    </Switch>
  </Router>
);

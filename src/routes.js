import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/category" component={Category} />
    <Route path="/products" component={Products} />
  </Switch>
);

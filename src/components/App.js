import React, { useState } from "react";
import "../components/App.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Category from "./Category";
import Dashboard from "./Dashboard";
import Products from "./Products";
import { Paper, Container } from "@material-ui/core";
import Header from "./Header";
import SideMenu from "./SideMenu";

const styles = {
  list: {
    width: 250,
  },
};

function App(props) {
  const { classes } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="App">
        <Paper elevation={3}>
          <SideMenu className={classes.list} />
        </Paper>
      </Container>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
      </Switch>
    </>
  );
}

export default withStyles(styles)(App);

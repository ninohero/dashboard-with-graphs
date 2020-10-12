import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import history from "./../history";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>

        <Button color="inherit">
          <Link to="/">Dashboard</Link>
        </Button>
        <Button color="inherit">
          <Link to="/Category">Category</Link>
        </Button>
        <Button color="inherit">
          <Link to="/Products">Products</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

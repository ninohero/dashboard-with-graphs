import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";

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
    <AppBar position="static" className={classes.root}>
      <Toolbar
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs"
          centered={true}
        >
          <Tab value="one" label="Dashboard" {...a11yProps("one")} />
          <Tab value="two" label="Category" {...a11yProps("two")} />
          <Tab value="three" label="Products" {...a11yProps("three")} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

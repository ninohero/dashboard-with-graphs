import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  theText: {
    color: "taupe",
  },
});

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={4} style={{ border: "1px sm red" }}>
            1
          </Grid>
          <Grid item sm={8} style={{ border: "1px sm black" }}>
            2
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

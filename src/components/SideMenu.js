import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  theText: {
    color: "maroon",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.theText}>
      <p>Side menu Hiya here!</p>
    </div>
  );
};

export default SideMenu;

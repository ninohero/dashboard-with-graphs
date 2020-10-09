import React, { useState } from "react";
import logo from "../logo.svg";
import { Counter } from "../features/counter/Counter";
import "../components/App.css";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  certainPTag: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

function Dashboard(props) {
  const { classes } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  console.log(styles.list);

  const list = (anchor) => (
    <>
      <Grid container>
        <Grid item sm={4}></Grid>
      </Grid>
      <Grid
        sm={8}
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );

  console.log("props", props);

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h4" component="h1" gutterBottom>
        Create React App + Material-UI{" "}
        <i className="material-icons md-dark md-inactive">face</i>
      </Typography>
      <p className={classes.certainPTag}>This is a certain paragraph</p>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer("top", true)}
      >
        Primary Button
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={toggleDrawer("top", true)}
      >
        Secondary Button
      </Button>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
    </>
  );
}

export default withStyles(styles)(Dashboard);

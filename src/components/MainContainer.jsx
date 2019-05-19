import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import SideBar from "./SideBar";
import Header from "./Header";

import RouterNav from "./navigations/MainRouter/RouterNav";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 5,
    marginBottom: 5
  }
});

function CenteredGrid(props) {
  const { classes, theme } = props;

  return (
    <div className={classes.content}>
      <Grid container spacing={36}>
        <Grid container spacing={12} className="bg-dark text-white text-center">
          <Grid item xs={1}>
            <SideBar />
          </Grid>
          <Grid item xs={10} className="pt-4">
            <Header theme={theme} />
          </Grid>
          <Grid item xs={1} />
        </Grid>

        <Grid container spacing={32}>
          <Grid item xs={12} style={theme.centerContent}>
            <RouterNav />
            <Paper className={classes.paper}>xs=12</Paper>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);

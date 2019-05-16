import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import SideBar from "./SideBar";
import Header from "./Header";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.content}>
      <Grid container spacing={24}>
        <Grid
          container
          spacing={0}
          className="bg-dark text-white text-center h-100"
        >
          <Grid item xs={1}>
            <SideBar />
          </Grid>
          <Grid item xs={11} className="pt-4">
            <Header />
          </Grid>
        </Grid>

        <Grid container spacing={32}>
          <Grid item xs={12} style={{ margin: 5, padding: 5 }}>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
            <Paper className={classes.paper}>xs=6</Paper>
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

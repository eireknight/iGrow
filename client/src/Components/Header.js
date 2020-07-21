import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    color: "#2C3E50",
    textAlign: "center",
  },
  logo: {
    padding: 10,
    paddingTop: 6,
  },
  tool: {
    minWidth: 200,
    margin: "auto",
  },
};

function Menu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <AppBar position="static" style={{ backgroundColor: "#33963B" }}>
          <Toolbar className={classes.tool}>
            <Typography
              variant="h4"
              className={classes.grow}
              centered
            >
              iGrow
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.objectOf(Array).isRequired,
};
export default withStyles(styles)(Menu);

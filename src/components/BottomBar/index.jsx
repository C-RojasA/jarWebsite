import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Box } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.liceojorgealessandri.cl/">
        Liceo Jorge Alessandri Rodriguez - La Serena.
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#2b2b2b",
    color: "#dcdcdc",
    padding: 5
  }
}));

const BottomBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Copyright />
      </Box>
    </>
  );
};

export default BottomBar;

import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Paper: {
    height: "400px"
  }
});

const Youtube = () => {
  const videoSrc = "https://www.youtube.com/embed/z2rL2uCuJVc";
  const classes = useStyles();
  return (
    <>
      <Paper elevation={10} className={classes.Paper}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
    </>
  );
};

export default Youtube;

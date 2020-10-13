import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    width: "100vw",
    height: "93vh"
  },
  root2: {
    width: "inherit",
    height: "inherit",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  description: {
    position: "absolute",
    margin: "6% auto auto 4%",
    backgroundColor: "rgba(3, 3, 3, 0.5)",
    padding: theme.spacing(4),
    borderRadius: "10px"
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  bottom: {
    marginBottom: theme.spacing(10)
  }
}));

const CareerItem = ({ title, description, laborArea, photo }) => {
  const classes = useStyles();
  return (
    <>
      <Box display="block">
        <CardMedia className={classes.root}>
          <Grid
            item
            className={classes.root2}
            style={{ backgroundImage: `url(${photo})` }}
          >
            <Grid item lg={3} sm={2} className={classes.description}>
              <Grid>
                <Typography
                  className={classes.title}
                  component="h2"
                  variant="h5"
                  align="center"
                >
                  {title}
                </Typography>
                <Typography paragraph spacing={10}>
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardMedia>
      </Box>
      <Grid item className={classes.bottom}>
        <Typography component="h1" variant="h5">
          Campo Laboral
        </Typography>
        <Typography paragraph>{laborArea}</Typography>
      </Grid>
    </>
  );
};

export default CareerItem;

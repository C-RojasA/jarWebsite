import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Youtube from "../../components/Youtube";
import Event from "../../components/Event/event-item";
import Jumbotron from "../../components/Jumbotron";
import CarouselNews from "../../components/CarouselNews";

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(../src/assets/img/Jumbotron/01.jpg)",
    height: "80vh",
    backgroundSize: "cover"
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Jumbotron />
      <Paper className={classes.root}>
        <img alt="" src="" />
      </Paper>

      <Container maxWidth="lg">
        <Grid container>
          <CarouselNews />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            navegation
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Youtube />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Event />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;

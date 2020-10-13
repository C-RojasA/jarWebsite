import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  List: {
    width: "100%",
    maxWidth: 360
  },
  inline: {
    display: "inline"
  }
});

const tier = {
  title: "Event name",
  date: "25 noviembre",
  hour: "13:00 - 12:00",
  location: "Liceo Jorge Alessandri"
};

const eventItem = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={4} md={4} lg={3} container>
          <Typography>{tier.date}</Typography>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Typography>{tier.title}</Typography>
          <Typography>{tier.date}</Typography>
          <Typography>{tier.hour}</Typography>
          <Typography>{tier.location}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default eventItem;

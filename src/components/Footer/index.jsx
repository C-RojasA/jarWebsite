import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import {
  Grid,
  Container,
  Box,
  Typography,
  makeStyles
} from "@material-ui/core";

import BottomBar from "../BottomBar";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "35px",
    backgroundColor: "#444",
    padding: "25px",
    color: "white"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4}>
              <Typography variant="h5" gutterBottom>
                CONTACTO
              </Typography>
              <Typography gutterBottom>
                <LocationOnIcon fontSize="small" />
                Calle la Cruz #1722 - Villa el Parque Las Compañias - La Serena
              </Typography>
              <Typography gutterBottom>
                <PhoneIcon fontSize="small" />
                51 2253807
              </Typography>
              <Typography gutterBottom>
                <AlternateEmailIcon fontSize="small" />
                liceojorgealessandri@corporacionggv.cl
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h5" gutterBottom>
                SUSCRIBETE
              </Typography>
              <Typography>aaaa</Typography>
            </Grid>
            <Grid item lg={4}>
              <Typography variant="h5" gutterBottom>
                SÍGUENOS EN
              </Typography>
              <Typography>aaaa</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <BottomBar />
    </>
  );
};

export default Footer;

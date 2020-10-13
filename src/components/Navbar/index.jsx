import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";

import Logo from "../../assets/img/logo.png";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  logo: {
    height: "60px",
    padding: "5px"
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorElDesktop, setAnchorElDesktop] = React.useState(null);
  const [anchorElMobile, setAnchorElMobile] = React.useState(null);
  const [anchorElServicesMobile, setAnchorElServicesMobile] = React.useState(
    null
  );

  const isMobileMenuOpen = Boolean(anchorElMobile);

  const openSubMenuServicesDesktop = event => {
    setAnchorElDesktop(event.currentTarget);
  };

  const closeSubMenuServicesDesktop = () => {
    setAnchorElDesktop(null);
  };

  const openMenuMobile = event => {
    setAnchorElMobile(event.currentTarget);
  };

  const openSubMenuServicesMobile = event => {
    setAnchorElServicesMobile(event.currentTarget);
  };

  const closeSubMenuServicesMobile = () => {
    setAnchorElServicesMobile(null);
    setAnchorElMobile(null);
  };

  /**
   * menu DESKTOP
   */
  const desktopMenu = (
    <nav className={classes.sectionDesktop}>
      <Link
        variant="button"
        color="textPrimary"
        component={RouterLink}
        to="/"
        className={classes.link}
      >
        Home
      </Link>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openSubMenuServicesDesktop}
      >
        Nosotros
        <ArrowDropDown />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorElDesktop}
        keepMounted
        open={Boolean(anchorElDesktop)}
        onClose={closeSubMenuServicesDesktop}
      >
        <MenuItem
          onClick={closeSubMenuServicesDesktop}
          component={RouterLink}
          to="/"
        >
          Mision y Vision
        </MenuItem>
        <MenuItem
          onClick={closeSubMenuServicesDesktop}
          component={RouterLink}
          to="/historia"
        >
          Nuestra Historia
        </MenuItem>
      </Menu>
      <Link
        variant="button"
        color="textPrimary"
        component={RouterLink}
        to="/especialidades"
        className={classes.link}
      >
        Especialidades
      </Link>
      <Link
        variant="button"
        color="textPrimary"
        component={RouterLink}
        to="/especialidades"
        className={classes.link}
      >
        Noticias
      </Link>
    </nav>
  );

  /**
   * menu MOVIL (1er nivel)
   */
  const mobileMenu = (
    <Menu
      id="simple-menu"
      anchorEl={anchorElMobile}
      keepMounted
      open={isMobileMenuOpen}
      onClose={closeSubMenuServicesMobile}
    >
      <MenuItem
        onClick={closeSubMenuServicesMobile}
        component={RouterLink}
        to="/"
      >
        Home
      </MenuItem>
      <MenuItem onClick={openSubMenuServicesMobile}>
        Services
        <ArrowDropDown />
      </MenuItem>
    </Menu>
  );

  /**
   * Sub menu MOVIL ( con los servicios )
   */
  const servicesMobileMenu = (
    <Menu
      id="simple-menu"
      anchorEl={anchorElServicesMobile}
      keepMounted
      open={Boolean(anchorElServicesMobile)}
      onClose={closeSubMenuServicesMobile}
    >
      <MenuItem
        onClick={closeSubMenuServicesMobile}
        component={RouterLink}
        to="/"
      >
        Hourly Rate
      </MenuItem>
      <MenuItem
        onClick={closeSubMenuServicesMobile}
        component={RouterLink}
        to="/services/FlatRate"
      >
        Flat Rate
      </MenuItem>
      <MenuItem
        onClick={closeSubMenuServicesMobile}
        component={RouterLink}
        to="/"
      >
        Spring Clean
      </MenuItem>
      <MenuItem
        onClick={closeSubMenuServicesMobile}
        component={RouterLink}
        to="/"
      >
        End of Leasing
      </MenuItem>
      <MenuItem
        onClick={closeSubMenuServicesMobile}
        component={RouterLink}
        to="/"
      >
        Office Cleaning
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Appbar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarTitle}>
            <img src={Logo} className={classes.logo} alt="" />
          </div>
          {desktopMenu}
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to="/"
          >
            Acceso
          </Button>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={openMenuMobile}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Appbar>
      {mobileMenu}
      {servicesMobileMenu}
    </>
  );
};

export default Navbar;

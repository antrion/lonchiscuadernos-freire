import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import logo from "../../logo.png";

const useStyles = makeStyles({
    navBarStyle: {
      background: 'linear-gradient(45deg, #b83bed 30%, #551470 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: '6rem',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
        maxWidth: 160,
        padding: '.5em',
    }
  });

export const NavBar = () => {

    const classes = useStyles();

    return <AppBar position="static" className = {classes.navBarStyle}>
    <Tabs>
    <img src={logo} alt="logo" className={classes.logo} />
      <Tab label="Agendas" />
      <Tab label="Cuadernos" />
      <Tab label="Libretas" />
      <Tab label="Personalizados" />
    </Tabs>
  </AppBar>
}
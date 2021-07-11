import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Button } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import logo from '../../logo.png';
import { CartWidget } from './components/CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const agendas= 'agendas';
const cuadernos= 'cuadernos';
const libretas= 'libretas';
const personalizados= 'personalizados';

const useStyles = makeStyles(() => ({
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
    },
  }));

export const NavBar = () => {

    const classes = useStyles();

    return <AppBar position="static" className = {classes.navBarStyle}>
    <Toolbar>
    <Link to={'/'}> <img src={logo} alt="logo" className={classes.logo} /></Link>
      <Tabs>
      <Button><Link to={'/category/'+agendas}>Agendas</Link></Button>
      <Button><Link to={'/category/'+cuadernos}>Cuadernos</Link></Button>
      <Button><Link to={'/category/'+libretas}>Libretas</Link></Button>
      <Button><Link to={'/category/'+personalizados}>Personalizados</Link></Button>
      <CartWidget />
    </Tabs>
    </Toolbar>
  </AppBar>
}
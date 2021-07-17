import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton'
import { CardContext } from '../../../../context/CartContext'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const CartWidget = props => {
  const classes = useStyles();

  const {cantItems} = useContext(CardContext);

  return (
    <IconButton>
    <div className={classes.root}>
      {console.log(cantItems)}
      {cantItems > 0 && 
      <Badge badgeContent={cantItems} color="primary">
        <Link to={'/cart'}><ShoppingCartIcon /></Link>
      </Badge>}
    </div>
    </IconButton>
  );
}
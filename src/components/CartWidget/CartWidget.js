import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const CartWidget = props => {
  const classes = useStyles();

  return (
    <IconButton>
    <div className={classes.root}>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
    </IconButton>
  );
}
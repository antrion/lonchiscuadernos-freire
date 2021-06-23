import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
    media: {
      height: 140,
    },
  });

export const ItemDetail = props => {

    const classes = useStyles();

    const { id, title, price, pictureUrl } = props;

return <div className={classes.root}>
<img src={pictureUrl} alt={title} ></img>
<div><h1>{title}</h1></div>
{console.log({price})};
</div>

}
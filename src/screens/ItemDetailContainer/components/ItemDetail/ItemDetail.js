import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ItemCount } from '../../../ItemListContainer/components/Item/components/ItemCount/ItemCount'

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
{console.log({price})}
<ItemCount stock={5} initial={1} /> 
</div>

}
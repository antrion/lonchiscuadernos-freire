import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ItemCount } from '../../../ItemListContainer/components/Item/components/ItemCount/ItemCount'

const useStyles = makeStyles({
    root: {
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      margin: '2em'
    },
    media: {
      height: '25em',
    },
  });

export const ItemDetail = props => {

    const classes = useStyles();

    const { title, price, pictureUrl } = props;

return <> 
<div className={classes.root}>
<img src={pictureUrl} alt={title} className={classes.media}></img>
<div><h1>{title}</h1></div>
<div><h2>${price}</h2></div>
<ItemCount stock={5} initial={0} /> 
</div>
</> 
}

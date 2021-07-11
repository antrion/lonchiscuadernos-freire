import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ItemCount } from '../../../ItemListContainer/components/Item/components/ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      justifyContent: 'center', 
      alignItems: 'center',
      width: '100%',
      height: '100%',
      margin: '2em'
    },
    media: {
      height: '25em',
    },
  });

export const ItemDetail = props => {

    const classes = useStyles();

    const { title, price, pictureUrl } = props;

    const [quantity,setQuantity] = useState(0);

    function onAdd (quantityToAdd) {
      if (quantityToAdd > 0) {
        return <Link to={'/cart'}>Terminar tu compra</Link>
      }
    };

const handleQuantity = value => setQuantity(value);

return <Grid container spacing={2} className={classes.root}>
<div>
<img src={pictureUrl} alt={title} className={classes.media}></img>
</div>
<div>
<div><h1>{title}</h1></div>
<div><h2>${price}</h2></div>
{quantity === 0 ?
<ItemCount stock={5} initial={1} changeQuantity={handleQuantity} /> :
<button>{onAdd(quantity)}</button>}
</div>
</Grid> 
}
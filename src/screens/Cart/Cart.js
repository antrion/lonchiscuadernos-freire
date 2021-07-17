import React,{useContext} from 'react'
import { CardContext } from '../../context/CartContext'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {useHistory } from 'react-router-dom';

export const Cart = () => {

    const {items,clear,removeItem,precioTotal} = useContext(CardContext);

    const history = useHistory();

    return <>
    
    {items.length === 0 ? 
    <>
    <h1>Carrito Vacío</h1>
    <Button onClick={e => history.push('/')}>Volver</Button>
    </>
    :
    <>
    <ul>
        {items.map((item,i) => <li index={i}>{item.item.title} x {item.quantity} <Button onClick={()=>removeItem(item.item.id)}><DeleteIcon fontSize="small" /></Button></li>)}
    </ul>
    <h3>Total: ${precioTotal}</h3>
    {console.log(items)}
    <Button onClick={()=>clear()}>Vaciar carrito</Button>
    </>}
    </>
}
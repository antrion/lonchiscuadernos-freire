import React from 'react';
import {Item} from '../Item/Item'
import { Grid } from '@material-ui/core';


export const ItemList = props => {

    const {products} = props;

    return <>
    {console.log(products)}
    {props.products.map((item,i)=><Grid item xs={12} sm={6} md={4} lg={3} index={i}><Item {...item} /></Grid>)}
    </>
}
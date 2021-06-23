import React from 'react';
import {Item} from '../Item/Item'


export const ItemList = props => {

    const { product } = props;
    
    return <Item {...props}/>
        
    
}
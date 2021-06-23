import React, {useState, useEffect} from 'react';
import {ItemDetail} from './components/ItemDetail/ItemDetail'

const getItems = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>resolve(
            [{"id": 1, "title": "Cuaderno Girasoles", "price": 120, "pictureUrl": "https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/cuaderno-girasoles2.jpg"}]
        ),2000) 
    })
}

export const ItemDetailContainer = () => {

    const [item,setItem] = useState([]);

    const mostrarItem = () => {
        getItems().then(res => {
            setItem(res);
        });
    }

    useEffect(() => {
        mostrarItem();
    },[])
    
    return <>
    {<ItemDetail item={item} />}
    </>    
}
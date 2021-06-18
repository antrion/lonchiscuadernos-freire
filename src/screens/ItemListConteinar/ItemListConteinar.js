import React, {useState, useEffect} from 'react';
import {ItemList} from './components/ItemList/ItemList';
import { CircularProgress } from '@material-ui/core';


const promiseProd = () => {
  return new Promise((resolve,reject) => {
      setTimeout(() =>resolve(
          [{"id": 1, "title": "Cuaderno Girasoles", "price": 120, "pictureUrl": "https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/cuaderno-girasoles2.jpg"},
          {"id": 2, "title": "Cuaderno Cactus", "price": 120, "pictureUrl": "https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/Cuaderno-cactus-1.jpg"},
          {"id": 3, "title": "Cuaderno Flores", "price": 120, "pictureUrl": "https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/cuaderno-ilustracion-flores-creciendo.jpg"},
          {"id": 4, "title": "Cuaderno Ciruelos", "price": 120, "pictureUrl": "https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/Flores-de-ciruelo-fondo-azul-2.jpg"}]
      ),2000) 
  })
}

export const ItemListConteiner = () => {

  const [products,setProducts] = useState([]);

    const mostrarProductos = () => {
        promiseProd().then(res => {
            setProducts(res);
          });
    }

    useEffect(() => {
        mostrarProductos();
    },[])
  
  return <>
  
  {products.map((product,i)=><ItemList index={i} {...product} />)}
  </>
  /*<>
  {mostrarProductos.length === 0 ? (
    <CircularProgress color="secondary" />
    ) : ({products.map((product,i)=><ItemList index={i} {...product} />)})}  
  </>*/

}
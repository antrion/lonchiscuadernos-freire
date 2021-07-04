import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemList} from './components/ItemList/ItemList';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  }
}));

const prodData = [
{
  id: 1, 
  title: 'Agenda Cactus', 
  category: 'agendas', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/tela-con-cactus.jpg'
},
{
  id: 2, 
  title: 'Agenda Frida', 
  category: 'agendas', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2017/12/agenda-frida.jpg'
},
{
  id: 3, 
  title: 'Agenda Tela Combinada', 
  category: 'agendas', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2017/12/telas-combinadas-1.jpg'
},
{
  id: 4, 
  title: 'Agenda Anillada', 
  category: 'agendas', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2017/12/ANILLADAS-2018-AGENDAS-ARTESANALES.jpg'
},
{
  id: 5, 
  title: 'Cuaderno Girasoles', 
  category: 'cuadernos', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/cuaderno-girasoles2.jpg'
},
{
  id: 6, 
  title: 'Cuaderno Ola', 
  category: 'cuadernos', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/La-gran-ola-de-Kanagawa-1.jpg'
},
{
  id: 7, 
  title: 'Cuaderno Galaxia', 
  category: 'cuadernos', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/cuaderno-galaxia.jpg'
},
{
  id: 8, 
  title: 'Cuaderno Ciruelos', 
  category: 'cuadernos', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/Flores-de-ciruelo-fondo-azul-2.jpg'
},
{
  id: 9, 
  title: 'Libreta Papel Madera', 
  category: 'libretas', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/08/libretas1.jpg'
},
{
  id: 10, 
  title: 'Libreta Recetario', 
  category: 'libretas', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/10/Recetario-1.jpg'
},
{
  id: 11, 
  title: 'Personalizado Mascota', 
  category: 'personalizados', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2017/12/mascota-en-la-tapa.jpg'
},
{
  id: 12, 
  title: 'Personalizado Messi', 
  category: 'personalizados', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/messi.jpg'
},
{
  id: 13, 
  title: 'Personalizado Mascota1', 
  category: 'personalizados', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/mascota-en-la-tapa2.jpg'
},
{
  id: 14, 
  title: 'Personalizado Mascota2', 
  category: 'personalizados', 
  price: 120, 
  pictureUrl: 'https://lolitacuadernos.com.ar/wp-content/uploads/2019/07/MASCOTA.jpg'
}]

const promiseProd = () => {
  return new Promise((resolve,reject) => {
      setTimeout(() =>resolve(prodData),2000) 
  })
}

export const ItemListContainer = () => {

  const [products,setProducts] = useState([]);

  const classes = useStyles();

  const { tipo } = useParams();

    const mostrarProductos = () => {
        promiseProd().then(res => {
            setProducts(res);
          });
    }

    useEffect(() => {
        mostrarProductos();
    },[])
  
    useEffect(() => { }, [tipo])

    const porTipo = filtrados => products.filter(prod => prod.category === tipo);

  return <div className={classes.root}>
    {products.length === 0 ? (
    <CircularProgress color="secondary" />
    ) : (<Grid container spacing={2}>
      <ItemList products={tipo? (porTipo(tipo)): products}/>
  </Grid>)}  
</div>
}
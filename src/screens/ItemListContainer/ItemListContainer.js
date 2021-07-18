import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemList} from './components/ItemList/ItemList';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { dataBase } from '../../Firebase/Firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  }
}));

export const ItemListContainer = () => {

  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);

  const classes = useStyles();

  const { tipo } = useParams();

  useEffect(() => {
    setLoading(true);
    const itemCollection = dataBase.collection("items");
    if (typeof tipo === 'undefined') {
      itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No results!')
        }
        const aux = querySnapshot.docs.map(element => {
          return {...element.data(), id:element.id};
        })
        setItems(aux);
      }).catch((error) => {
        console.log("Error searching items", error);
      }).finally(() => {
        setLoading(false)
      })      
    }
    else {
      const category = itemCollection.where('category', '==', tipo);
      category.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No results!')
        }
        const aux = querySnapshot.docs.map(element => {
          return {...element.data(), id:element.id};
        })
        setItems(aux);
      }).catch((error) => {
        console.log("Error searching items", error);
      }).finally(() => {
        setLoading(false)
      })
    }    
  },[tipo])  
    
  useEffect(() => { }, [tipo])

  return <div className={classes.root}>
    {loading === 0 ? (
    <CircularProgress color="secondary" />
    ) : (<Grid container spacing={2}>
      <ItemList products={items}/>
  </Grid>)}  
</div>
}
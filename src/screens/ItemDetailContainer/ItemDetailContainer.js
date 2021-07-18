import React, {useState, useEffect} from 'react';
import {ItemDetail} from './components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { dataBase } from '../../Firebase/Firebase'

export const ItemDetailContainer = () => {

    const [items,setItems] = useState([]);
    const [loading,setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("items");
        const item = itemCollection.doc(id);
        item.get().then((doc) => {
          if (!doc.exists) {
            console.log('Item does not exist! :(')
            return;
          }
          console.log('Item found!')
          setItems({ id: doc.id, ...doc.data() });
        }).catch((error) => {
          console.log("Error searching items", error);
        }).finally(() => {
          setLoading(false)
        })
    },[])
  
    useEffect(() => { }, [id])
    
    return <>
    {loading ? (
    <CircularProgress color="secondary" />
    ) : (<Grid>
      <ItemDetail {...items} />
  </Grid>)}  
    </>    
}
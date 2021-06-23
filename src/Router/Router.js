import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import {Categorias} from './Categorias/Categorias'


export const Router = () => {

    return <Switch>
    <Route exact path="/">
        <ItemListContainer/>
    </Route>
    <Route exact path="/category/:id">
        <Categorias/>
    </Route>
    </Switch>
}
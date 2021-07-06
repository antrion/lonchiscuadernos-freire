import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../screens/Cart/Cart';

export const Router = () => {

    return <Switch>
    <Route exact path="/">
        <ItemListContainer/>
    </Route>
    <Route path="/category/:tipo">
        <ItemListContainer/>
    </Route>
    <Route path="/item/:id">
        <ItemDetailContainer/>
    </Route>
    <Route path="/cart">
        <Cart/>
    </Route>
    </Switch>
}
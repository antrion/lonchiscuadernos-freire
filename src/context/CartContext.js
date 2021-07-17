import React,{createContext, useState, useEffect} from 'react'

export const CardContext = createContext([]);

export const CartComponentContext = props => {

    const [items,setItems] = useState([]);


    function isInCart(id) {
        const encontrado = items.filter((item) => item.item.id === id);
        return (encontrado.length !== 0)
    }

    function getIndex(id) {
        return items.findIndex(item => item.item.id === id);
      }

    function addQuantity(id, quantityToAdd) {
        if (getStock(id) === 0) {
            alert("No hay stock disponible")
        }else {
            items[getIndex(id)].quantity =  items[getIndex(id)].quantity + quantityToAdd
            items[getIndex(id)].stock = items[getIndex(id)].stock - quantityToAdd
        }
    }

    function getStock(id) {
        return !(getIndex(id) === -1) ? items[getIndex(id)].stock : 5
    }

    const addItem = (item, quantity, stock) => {
        console.log(items)
        isInCart(item.id)? addQuantity(item.id, quantity ) : setItems([...items, {item,quantity,stock}])
    }

    const removeItem = (id) => {        
        const newItems = items.filter((item) => item.item.id !== id);
        setItems(newItems);
    }

    const clear = () => {
        setItems([])
    }

    const cantItems = items.reduce((total, currentValue) => total = total + currentValue.quantity,0)

    const precioTotal = items.reduce((total, currentValue) => total = total + currentValue.item.price*currentValue.quantity,0)

    return (<CardContext.Provider value={ {items, addItem, removeItem, clear, cantItems, precioTotal, getStock} }>
    {props.children}
    </CardContext.Provider>)

}
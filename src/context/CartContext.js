import React,{createContext, useState} from 'react'

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
            const itemsTemp = items
            itemsTemp[getIndex(id)].quantity = itemsTemp[getIndex(id)].quantity + quantityToAdd
            itemsTemp[getIndex(id)].stock = itemsTemp[getIndex(id)].stock - quantityToAdd
            setItems(itemsTemp)
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

    const sumarItems = () => { 
        var total = 0;
        for (var i = 0; i < items.length; i++) {
        total += items[i].quantity }
        return total
    }

    const sumarPrecio = () => { 
        var total = 0;
        for (var i = 0; i < items.length; i++) {
        total += items[i].item.price*items[i].quantity }
        return total
    }

    let cantItems = sumarItems();

    let precioTotal = sumarPrecio()

    return (<CardContext.Provider value={ {items, addItem, removeItem, clear, cantItems, precioTotal, getStock} }>
    {props.children}
    </CardContext.Provider>)

}
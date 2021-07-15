import React,{createContext, useState, useEffect} from 'react'

export const CardContext = createContext([]);

export const CartComponentContext = props => {

    const [items, setItem] = useState([]);


    function isInCart(id) { 
        const encontrado = items.find(item => item.id === id);
        return (encontrado > -1)
    }

    function addQuantity(id, quantityToAdd) {
        const newItems = items.map((item) => {
            if (item.item.id === id) {
                const updatedItem = {
                    ...item,
                    quantity: quantityToAdd,
                };
            return updatedItem;
            }
            return item;
        });
        setItem(newItems);
    }

    const addItem = (item, quantity) => {
        console.log(items)
        isInCart(item.id)? addQuantity(item.id, quantity ) : items.push({item,quantity})
    }

    const removeItem = (id) => {
        
        const newItems = items.filter((item) => item.id !== id);
        setItem(newItems);

    }

    const clear = () => {
        setItem([])
    }

    return (<CardContext.Provider value={ {addItem, removeItem, clear} }>
    {props.children}
    {console.log(items)}
    </CardContext.Provider>)

}
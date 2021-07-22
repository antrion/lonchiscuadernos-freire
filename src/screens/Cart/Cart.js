import React,{useContext,useState,useEffect} from 'react'
import { CardContext } from '../../context/CartContext'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Card, CardContent, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { dataBase } from '../../Firebase/Firebase'
import firebase from 'firebase/app'
import 'firebase/firestore';

const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  };



export const Cart = () => {

    const {items,clear,removeItem,precioTotal} = useContext(CardContext);

    const history = useHistory();

    const [finish, setFinish] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

        
    
    const orders = dataBase.collection("orders");

    const newOrder = {
        buyer: userInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: precioTotal,
    }

    const saveOrder = () => {
    setLoading(true);
    orders.add(newOrder).then(({id}) => {
        setOrderId(id);
    }).catch(err => {
        setError(err);
    }).finally(()=> {
        setLoading(false);
    });
    }

    const addOrder = (id,title,price) => {
        const Order = {
            id: id,
            title: title,
            price: price,
        }
        cart.push(Order)
    }

    const addNewUserInfo = newUserInfo => {
        const buyer = {
            name: name,
            phone: phone,
            email: email,
        }
        setUserInfo(buyer)
        const orderItems = items.map((item) => [addOrder(item.item.id, item.item.title, item.item.price)])
        setCart(orderItems)
        saveOrder()
        clear()
        setFinish(false)
    }

    const newUserInfo = e => {
        e.preventDefault();
        addNewUserInfo({ name: name, phone: phone, email: email });
        setName('');
        setPhone('');
        setEmail('');
    }

    return <div style={containerStyle}>
    
    {items.length === 0 ? 
    <div>
    <h1>Carrito Vacío</h1>
    <Button onClick={e => history.push('/')}>Volver</Button>
    </div>
    :
    !finish && <div>
    <ul>
        {items.map((item,i) => <li key={i}>{item.item.title} x {item.quantity} <Button onClick={()=>removeItem(item.item.id)}><DeleteIcon fontSize="small" /></Button></li>)}
    </ul>
    <h3>Total: ${precioTotal}</h3>
    <Button onClick={()=>clear()}>Vaciar carrito</Button>
    <div>
    <Button onClick={()=>setFinish(true)}>Finalizar Compra</Button>
    </div>
    </div>
    }
    {finish && <Card style={containerStyle}>
    <CardContent>
    <form onSubmit={newUserInfo}>
      <TextField id="name" label="Nombre" value={name} onChange={e => setName(e.target.value)} />
      <TextField id="phone" label="Telefono" value={phone} onChange={e => setPhone(e.target.value)} />
      <TextField id="Email" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
      {loading? <Button
        disabled={name === '' || phone === '' || email === ''}
        type="submit"> Finalizar</Button> :
        <h4>Se generó la orden {orderId}</h4>}
    </form>
    </CardContent>
  </Card>}
    </div>
}
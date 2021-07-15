import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router'
import { CartComponentContext } from './context/CartContext'
import './App.css';


const App = props => {

  return <CartComponentContext>
    <BrowserRouter>
      <NavBar/>
      <Router/>
    </BrowserRouter>
  </CartComponentContext>
}

export default App;

import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {ItemListContainer} from './screens/ItemListContainer/ItemListContainer'
import { Router } from './Router/Router';


const App = props => {

  return <BrowserRouter>
    <NavBar/>
    <Router/>
  </BrowserRouter>
}

export default App;

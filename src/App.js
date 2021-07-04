import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router'
import './App.css';


const App = props => {

  return <BrowserRouter>
    <NavBar/>
    <Router/>
  </BrowserRouter>
}

export default App;

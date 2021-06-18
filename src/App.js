import { NavBar } from './components/NavBar/NavBar';
import { ItemListConteiner } from './screens/ItemListConteinar/ItemListConteinar';
import './App.css';

const App = props => {

  return <div className="appContainer">
    <NavBar/>
    <ItemListConteiner className="appContainer"/>
  </div>
}

export default App;

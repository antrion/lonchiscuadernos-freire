import { NavBar } from './components/NavBar/NavBar';
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';
import './App.css';

const App = props => {

  return <div className="appContainer">
    <NavBar/>
    <ItemListConteiner/>
  </div>
}

export default App;

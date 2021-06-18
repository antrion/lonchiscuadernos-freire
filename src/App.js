import { NavBar } from './components/NavBar/NavBar';
import { ItemDetail } from './screens/ItemDetailContainer/components/ItemDetail/ItemDetail';
import './App.css';

const App = props => {

  return <div className="appContainer">
    <NavBar/>
    <ItemDetail/>
  </div>
}

export default App;

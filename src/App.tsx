import { Outlet } from 'react-router';
import './App.css';
import PokemonList  from './views/PokemonList';

// Functional Component Example
const DemoComponent = () => <div> Hellow World :)</div>

function App() {
  return (
    <div className="App">
      <div>
        <img className="logo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"  alt="logo" />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;

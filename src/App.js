import logo from './logo.svg';
import './App.scss';
import Header from "./Components/Header"
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;

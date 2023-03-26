import logo from './logo.svg';
import './App.scss';
import Header from "./Components/Header"
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='d-flex justify-content-end'>
        <h1>Carb Diary</h1>
      </div>
      <h3 className='d-flex justify-content-end lead'>
        Created by Alec Hannaford
      </h3>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;

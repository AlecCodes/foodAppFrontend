import logo from './logo.svg';
import './App.scss';
import Header from "./Components/Header"
import {Outlet} from 'react-router-dom'

function App() {
  return (
    //set height of app to 100%, then bottom padding on outlet?
    <div className="App bg-secondary">
      <div className='container bg-light p-0'>
        <div className='d-flex justify-content-end p-2'>
          <h1>Carb Diary</h1>
        </div>
        <h3 className='d-flex justify-content-end lead p-2'>
          Created by Alec Hannaford
        </h3>
      <Header/>
      <div className='bg-white'>
        <Outlet/>
      </div>
    </div>
  </div>
  );
}

export default App;

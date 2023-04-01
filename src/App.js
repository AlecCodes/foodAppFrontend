import './App.scss';
import Header from "./Components/Header"
import {Outlet} from 'react-router-dom'
import Footer from "./Components/Footer"

function App() {
  return (
    //set height of app to 100%, then bottom padding on outlet?
    <div className="App bg-secondary">
      <div className='container bg-light p-0'>
      <Header/>
      <div className='bg-white'>
        <Outlet/>
      </div>
    </div>
    <Footer/>
  </div>
  );
}

export default App;

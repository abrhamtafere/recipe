import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './componets/Navigationbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import {Routes, Route} from 'react-router-dom';
import Menu from './pages/Menu';
import Service from './pages/Service';
import Contact from './pages/Contact';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <div className="App">
      <div className=''>
        <Navigationbar />
      </div>
      <div className=''>
       <Routes>
         <Route path='/' element={ <Home /> }/>
         <Route path='/menu' element={ <Menu /> }/>
         <Route path='/service' element={ <Service /> }/>
         <Route path='/about' element={ <About /> }/>
         <Route path='/contact' element={ <Contact /> }/>
       </Routes>
      </div>
    </div>
  );
}

export default App;

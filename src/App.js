
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './komponente/Footer';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import Tretmani from './komponente/Tretmani';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar></Navbar>

     <Routes>
          <Route path="/" element={ <Pocetna></Pocetna>}></Route>
          <Route path="/tretmani" element={ <Tretmani></Tretmani>}></Route>
     </Routes>
        
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;

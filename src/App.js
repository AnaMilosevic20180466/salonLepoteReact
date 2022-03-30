
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './komponente/Footer';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import Tretmani from './komponente/Tretmani';

function App() {
  const [sort,setSort] = useState(true);
  function sortiraj(){

    setSort(!sort)


  }
  const[sviTretmani] = useState([

      {
          id:1,
          naziv:"Sporstska masaza",
          slika: "https://medias.sasomange.rs/medias/filed137c509-5955-4364-af09-7eed94e8e510-sm800x600Format?context=bWFzdGVyfHJvb3R8MTE4NjkyfGltYWdlL2pwZWd8aDBmL2hiNS8xMDk0Mzk1Njk3NTY0Ni9maWxlZDEzN2M1MDktNTk1NS00MzY0LWFmMDktN2VlZDk0ZThlNTEwX3NtODAweDYwMEZvcm1hdHwyZDdkZmI5ODZjZDUzMDZkZTVjM2Y2NzZlZDU0YTFkNTBiYzMzYTcyZTliYjRlNmQ1NzBkY2M1NWYzZjVkMzMx",
          opis:" It is a long established fact that a reader will be distracted by",
          vreme: 45,
          cena: 1599,
          adresa:  "Prvomajska 75"
      },
      {
        id:2,
        naziv:"Manikir",
        slika: "https://studionamaste.rs/wp-content/uploads/2020/05/nail3-e1590688644899.jpg",
        opis:" It is a long established fact that a reader will be distracted by",
        vreme: 45,
        cena: 3500,
        adresa:  "Prvomajska 75"
    },      
    {
      id:3,
      naziv:"Sporstska masaza",
      slika: "https://medias.sasomange.rs/medias/filed137c509-5955-4364-af09-7eed94e8e510-sm800x600Format?context=bWFzdGVyfHJvb3R8MTE4NjkyfGltYWdlL2pwZWd8aDBmL2hiNS8xMDk0Mzk1Njk3NTY0Ni9maWxlZDEzN2M1MDktNTk1NS00MzY0LWFmMDktN2VlZDk0ZThlNTEwX3NtODAweDYwMEZvcm1hdHwyZDdkZmI5ODZjZDUzMDZkZTVjM2Y2NzZlZDU0YTFkNTBiYzMzYTcyZTliYjRlNmQ1NzBkY2M1NWYzZjVkMzMx",
      opis:" It is a long established fact that a reader will be distracted by",
      vreme: 45,
      cena: 5000,
      adresa:  "Prvomajska 75"
  },
  {
    id:4,
    naziv:"Manikir",
    slika: "https://studionamaste.rs/wp-content/uploads/2020/05/nail3-e1590688644899.jpg",
    opis:" It is a long established fact that a reader will be distracted by",
    vreme: 45,
    cena: 1000,
    adresa:  "Prvomajska 75"
},


  ]);





  return (
    <div className="App">
     <BrowserRouter>
     <Navbar></Navbar>

     <Routes>
          <Route path="/" element={ <Pocetna></Pocetna>}></Route>
          <Route path="/tretmani" element={ <Tretmani sviTretmani={sviTretmani} sortiraj= {sortiraj} sort={sort} ></Tretmani>}></Route>
     </Routes>
        
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;

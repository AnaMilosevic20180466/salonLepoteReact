
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './komponente/Footer';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import Tretmani from './komponente/Tretmani';

function App() {
  const [sort,setSort] = useState(true);
  const [brojac,setBrojac] = useState(-1)
  function sortiraj(){
    setSort(!sort)
  }
  function pretrazi(kriterijum){
    console.log(kriterijum);
   
    if(kriterijum!==""){

      setBrojac(0);
      sviTretmani.forEach((t)=>{
          
         t.pretraga=1;
         
    });



      sviTretmani.forEach((t)=>{
        
          if( t.naziv.toLowerCase().includes(kriterijum.toLowerCase())){
            t.pretraga=2;
            setBrojac(brojac+1);
          }else{
            t.pretraga=0;
          }
      });

      console.log(sviTretmani)  
     
    }else{
      setBrojac(-1);
    }
      

  }
  const[sviTretmani] = useState([

      {
          id:1,
          naziv:"Sportska masaza",
          slika: "https://www.wellness-spa.rs/wp-content/uploads/2013/03/massage.jpg",
          opis:" It is a long established fact that a reader will be distracted by",
          vreme: 45,
          cena: 1599,
          adresa:  "Prvomajska 75",
          pretraga:1,
          kategorija:"nega tela"
      },
      {
        id:2,
        naziv:"nadogradnja noktiju",
        slika: "https://studionamaste.rs/wp-content/uploads/2020/05/nail3-e1590688644899.jpg",
        opis:" It is a long established fact that a reader will be distracted by",
        vreme: 45,
        cena: 3500,
        adresa:  "Prvomajska 75",
        pretraga:1,
        kategorija:"manikir/pedikir"

    },      
    {
        id:3,
        naziv:"Anticelulit masaza",
        slika:"http://www.celulitekspert.com/images/masaza-u-day-spa-estetskom-centru-celulit-ekspert-beograd.jpg",
        opis:" It is a long established fact that a reader will be distracted by",
        vreme: 45,
        cena: 5000,
        adresa:  "Prvomajska 75",
        pretraga:1,
        kategorija:"nega tela"

    },
    {
      id:4,
      naziv:"higijenski tretman lica",
      slika: "http://www.fitnessviktorija.com/media/malai-640x440.jpg",
      opis:" It is a long established fact that a reader will be distracted by",
      vreme: 45,
      cena: 1000,
      adresa:  "Prvomajska 75",
      pretraga:1,
      kategorija:"nega lica"

  },
  {
    id:5,
    naziv:"terapeutska masaza",
    slika: "https://medias.sasomange.rs/medias/filed137c509-5955-4364-af09-7eed94e8e510-sm800x600Format?context=bWFzdGVyfHJvb3R8MTE4NjkyfGltYWdlL2pwZWd8aDBmL2hiNS8xMDk0Mzk1Njk3NTY0Ni9maWxlZDEzN2M1MDktNTk1NS00MzY0LWFmMDktN2VlZDk0ZThlNTEwX3NtODAweDYwMEZvcm1hdHwyZDdkZmI5ODZjZDUzMDZkZTVjM2Y2NzZlZDU0YTFkNTBiYzMzYTcyZTliYjRlNmQ1NzBkY2M1NWYzZjVkMzMx",
    opis:" It is a long established fact that a reader will be distracted by",
    vreme: 45,
    cena: 5000,
    adresa:  "Prvomajska 75",
    pretraga:1,
    kategorija:"nega tela"

},  {
  id:6,
  naziv:"polutretman lica",
  slika: "https://www.platinumbeautycode.rs/wp-content/uploads/2018/11/klasi%C4%8Dantretmanilica.jpg",
  opis:" It is a long established fact that a reader will be distracted by",
  vreme: 45,
  cena: 5000,
  adresa:  "Prvomajska 75",
  pretraga:1,
  kategorija:"nega lica"

},
{
  id:7,
  naziv:"gel lak",
  slika: "https://static.sredime.rs/image/photo/c/0/c0d8ec4888d56b0fabfe476c780e2cc4/8626_sm.jpg",
  opis:" It is a long established fact that a reader will be distracted by",
  vreme: 45,
  cena: 3500,
  adresa:  "Prvomajska 75",
  pretraga:1,
  kategorija:"manikir/pedikir"

},  
{
  id:8,
  naziv:"nail art",
  slika: "https://www.uelisky.cz/dwn/1/gel-lak-nokti-slike-2020.jpg",
  opis:" It is a long established fact that a reader will be distracted by",
  vreme: 45,
  cena: 3500,
  adresa:  "Prvomajska 75",
  pretraga:1,
  kategorija:"manikir/pedikir"

},

  ]);





  return (
    <div className="App">
     <BrowserRouter>
     <Navbar pretrazi={pretrazi}></Navbar>

     <Routes>
          <Route path="/" element={ <Pocetna></Pocetna>}></Route>
          <Route path="/tretmani" element={ <Tretmani sviTretmani={sviTretmani} sortiraj= {sortiraj} sort={sort} brojac={brojac} ></Tretmani>}></Route>
     </Routes>
        
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;

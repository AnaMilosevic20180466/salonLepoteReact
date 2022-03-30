import React from 'react'

function Kartica({tretman}) {
  return (
    <div className="card">
     
    <div className="card-header" >
         <img className='card-img-top'  src ={tretman.slika}  /> 
    </div>
    <div className="card-body">
        
        <div className="tag tag-teal"> {tretman.kategorija}    </div>  
        <h4 className = "naslovKartice">   {tretman.naziv}  </h4> 
      
        <h6 className="opisProizvoda">  
         {tretman.opis}
        <br /><br /> Vreme:  {tretman.vreme} min.
        <br /><br /> Adresa: {tretman.adresa}
        <br /><br /> Cena: {tretman.cena} RSD
     
         </h6>
        
        
    </div> 
</div>





  )
}

export default Kartica
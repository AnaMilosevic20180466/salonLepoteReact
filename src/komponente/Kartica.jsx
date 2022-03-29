import React from 'react'

function Kartica({tretman}) {
  return (
    <div className="card">
     
    <div className="card-header" >
         <img className='card-img-top'  src ={tretman.slika}  /> 
    </div>
    <div className="card-body">
        
        
        <h4 className = "naslovKartice">   {tretman.naziv}  </h4>
        <hr />
        <h6 className="opisProizvoda">  
        <br /><br />  {tretman.opis}
        <br /><br /> {tretman.vreme}
        <br /><br />  {tretman.adresa}
        <br /><br />  {tretman.cena}
        


     
         </h6>
        
        
    </div> 
</div>





  )
}

export default Kartica
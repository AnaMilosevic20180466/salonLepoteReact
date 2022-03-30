import React from 'react'
import Kartica from './Kartica'

function Tretmani({sviTretmani,sortiraj,sort,brojac}) {
  
  return (
      <div>

        <button className='sortiranje' onClick={()=>sortiraj()}>Sortiraj</button>

        <div className='sviTretmani'>


          {brojac==-1 || brojac>0?
            
            <>
                         {sort==true ? 
          
          
          <>
              {sviTretmani
              .sort((a,b)=> a.cena<b.cena?1:-1)
              .map((t)=>  ( t.pretraga>0?<><Kartica  tretman={t} key={t.id}></Kartica></>:<></>)
               
               
              )
          }
            </>
         : 
      
          <>
              {sviTretmani
              .sort((a,b)=> a.cena<b.cena?-1:1)
              .map((t)=>  ( t.pretraga>0?<><Kartica  tretman={t} key={t.id}></Kartica></>:<></>)
               
               
              )
              
              
              
              }
          
          
          </>
      
      
      }
            </>
            :

            <>
            <p>Nema rezultata</p>
            </>
          }






              
            










        </div>
    </div>
  )
}

export default Tretmani
import React from 'react'
import Kartica from './Kartica'

function Tretmani({sviTretmani,sortiraj,sort}) {
  
  return (
      <div>

        <button className='sortiranje' onClick={()=>sortiraj()}>Sortiraj</button>

        <div className='sviTretmani'>


          {sort==true ? 
          
          
              <>
                  {sviTretmani
                  .sort((a,b)=> a.cena<b.cena?1:-1)
                  .map((t)=><Kartica  tretman={t} key={t.id}></Kartica>)
                  }
              </> 
          
          : 
          
              <>
                  {sviTretmani
                  .sort((a,b)=> a.cena<b.cena?-1:1)
                  .map((t)=><Kartica  tretman={t} key={t.id}></Kartica>)
                  }
              
              
              </>
          
          
          }
              
            










        </div>
    </div>
  )
}

export default Tretmani
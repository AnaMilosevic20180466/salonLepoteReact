import React from 'react'
import Kartica from './Kartica'

function Tretmani({sviTretmani}) {
  return (
    <div className='sviTretmani'>
           
        {sviTretmani.map((t)=><Kartica  tretman={t} key={t.id}></Kartica>)}










    </div>
  )
}

export default Tretmani
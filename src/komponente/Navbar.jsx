import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
function Navbar({pretrazi}) {
  return (
    <div>	
        <nav className="nav">
            <div className="nav__title">IMPRESSION</div>
                <ul className="nav__list">
                 
                    <li className="nav__item">   <Link to='/'>Pocetna</Link></li>
                    <li className="nav__item"> <Link to='/tretmani'>Tretmani</Link></li>
                    <li className="nav__item"> 
                    
                        <input type="text" id="kriterijum" placeholder="Search.." name="search"/>
                        <button type="submit" onClick={()=>pretrazi(document.getElementById("kriterijum").value)}>   <BsSearch></BsSearch> </button>
                    
                    
                    
                    </li>
                </ul>
        </nav>
</div>
  )
}

export default Navbar
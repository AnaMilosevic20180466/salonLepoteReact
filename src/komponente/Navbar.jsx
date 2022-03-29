import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>	
        <nav className="nav">
            <div className="nav__title">IMPRESSION</div>
                <ul className="nav__list">
                 
                    <li className="nav__item">   <Link to='/'>Pocetna</Link></li>
                    <li className="nav__item"> <Link to='/tretmani'>Tretmani</Link></li>
                    <li className="nav__item">Blog</li>
                </ul>
        </nav>
</div>
  )
}

export default Navbar
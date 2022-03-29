import React from 'react'

function Navbar() {
  return (
    <div>	
        <nav className="nav">
            <div className="nav__title">Site Title</div>
                <ul className="nav__list">
                    <li className="nav__item">Services</li>
                    <li className="nav__item">About Us</li>
                    <li className="nav__item">Blog</li>
                </ul>
        </nav>
</div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
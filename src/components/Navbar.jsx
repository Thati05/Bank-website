import React from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { Logo } from '../assets/index'

const Navbar = () => {
  return (
    <header className=' bg-black text-white padding-x pt-3 
      z-10 w-full top-0 fixed '>
      <nav className=' flex justify-between items-center max-container'>

        <a to='/home'>

          <img src={Logo}
            width={100}
            height={100}
            className=' object-contain'
          />
        </a>
        <ul className='flex font-open_sans text-lg flex-1 justify-end ml-[70px] gap-16 items-center mr-[70px] max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href='#sign-up/login'
          className='leading-normal font-open_sans justify-end text-lg font-bold hover:underline max-lg:hidden '
        >
          Sign Up/Login
        </a>
      </nav>
    </header>
  )
}

export default Navbar



import React from 'react'
import {NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget'
import {useCategories} from '../../hooks/useCategories'

const Navbar = () => {
  const {categories} = useCategories()
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <NavLink to='/' activeClassName='active' className='navbar-brand'>
        Coral-Byte
      </NavLink>

      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          {categories.map((c) => (
            <NavLink
              key={c}
              to={`/Category/${c}`}
              activeClassName='active'
              className='nav-item nav-link'
            >
              {c}
            </NavLink>
          ))}
        </div>
      </div>
      <NavLink to='/cart' className='nav-item nav-link'>
        <CartWidget />
      </NavLink>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
    </nav>
  )
}

export default Navbar

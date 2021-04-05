import React from 'react'
import CartWidget from '../CartWidget'

import {NavLink} from 'react-router-dom'
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
          {categories.map((c) => {
            return (
              <NavLink
                key={c}
                to={`/Category/${c}`}
                activeClassName='active'
                className='nav-item nav-link'
              >
                {c}
              </NavLink>
            )
          })}
        </div>
      </div>
      <CartWidget />

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

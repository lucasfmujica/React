/* eslint-disable indent */
import React from 'react'
import {NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget'
import {useCategories} from '../../hooks/useCategories'
import './navbar.css'

const Navbar = () => {
  const {categories} = useCategories()
  return (
    <div className='c-navbar'>
      <div className='c-container cc-10-cols'>
        <div className='c-nav-wrapper mt-2'>
          <NavLink to='/' activeClassName='active' className='c-nav-brand'>
            <div className='c-coralbyte-brand'>Coral Byte</div>
          </NavLink>
          <nav className='c-nav-menu'>
            <div className='c-nav-links'>
              {categories.map((c) => (
                <NavLink
                  key={c}
                  to={`/Category/${c}`}
                  activeClassName='active'
                  className='c-nav-link'
                >
                  {c}
                </NavLink>
              ))}
              <NavLink
                to='/orders'
                activeClassName='active'
                className='c-nav-link'
              >
                Ordenes
              </NavLink>
            </div>
            <div className='c-nav-buttons'>
              <NavLink to='/cart' className='nav-item nav-link'>
                <CartWidget />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
    // <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
    //   <NavLink to='/' activeClassName='active' className='navbar-brand'>
    //     Coral-Byte
    //   </NavLink>

    //   <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
    //     <div className='navbar-nav'>
    //       {categories.map((c) => (
    //         <NavLink
    //           key={c}
    //           to={`/Category/${c}`}
    //           activeClassName='active'
    //           className='nav-item nav-link'
    //         >
    //           {c}
    //         </NavLink>
    //       ))}
    //     </div>
    //   </div>
    //   <NavLink to='/cart' className='nav-item nav-link'>
    //     <CartWidget />
    //   </NavLink>

    //   <button
    //     className='navbar-toggler'
    //     type='button'
    //     data-toggle='collapse'
    //     data-target='#navbarNavAltMarkup'
    //     aria-controls='navbarNavAltMarkup'
    //     aria-expanded='false'
    //     aria-label='Toggle navigation'
    //   >
    //     <span className='navbar-toggler-icon' />
    //   </button>
    // </nav>
  )
}

export default Navbar

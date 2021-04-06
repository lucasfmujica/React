/* eslint-disable react/prop-types */
import React from 'react'
import {NavLink} from 'react-router-dom'
import Item from '../Item'
import './styles.css'

const ItemList = ({products = []}) => (
  <div className='container-fluid d-flex justify-content-center align-items-center'>
    <div className='row'>
      {products.map((product) => (
        <div className='col-sm' key={product.id}>
          <NavLink
            to={`/Item/${product.id}`}
            activeClassName='active'
            className='navbar-brand display-i'
          >
            <Item className='col-md-4' product={product} />
          </NavLink>
        </div>
      ))}
    </div>
  </div>
)
export default ItemList

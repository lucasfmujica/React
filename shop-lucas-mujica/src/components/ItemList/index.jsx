import React from 'react'
import Item from '../Item'
import './styles.css'
import {NavLink} from 'react-router-dom'

const ItemList = ({products = []}) => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center'>
      <div className='row'>
        {products.map((product) => {
          return (
            <div className='col-sm' key={product.id}>
              <NavLink
                to={`/Item/${product.id}`}
                activeClassName='active'
                className='navbar-brand display-i'
              >
                <Item className='col-md-4' product={product} />
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ItemList

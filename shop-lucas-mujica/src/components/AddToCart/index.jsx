/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, {useState, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {ItemCount} from '../ItemCount'
import '../Item/card.css'
import {CartProvider, useCart} from '../../context/CartContext'

export function AddToCart({product}) {
  const [counter, setCounter] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const {addItem, cart} = useCart()

  function addToCart() {
    addItem(product, counter)
    setIsAdded(true)
  }

  function counterChangeHandler(val) {
    setCounter(val)
  }

  return (
    <div>
      <ItemCount
        stock={product?.stock || 0}
        value={counter}
        onChange={counterChangeHandler}
      />
      {!isAdded && (
        <div className='p-2 mt-2 text-center card bg-dark animate__animated animate__fadeInUp'>
          <div className='overflow'>
            <button className='btn btn-success' onClick={addToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {isAdded && (
        <div className='p-2 mt-2 text-center card bg-dark animate__animated animate__fadeInUp'>
          <div className='overflow'>
            <NavLink to='/cart' className='navbar-brand'>
              <button className='btn btn-success'>Terminar mi compra</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

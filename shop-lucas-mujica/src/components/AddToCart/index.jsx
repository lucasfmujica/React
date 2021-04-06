/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {ItemCount} from '../ItemCount'
import '../Item/card.css'

export function AddToCart({product}) {
  const [contador, setContador] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  function addToCart() {
    setIsAdded(true)
  }

  function counterChangeHandler(val) {
    setContador(val)
  }

  return (
    <div>
      <ItemCount
        stock={product?.stock || 0}
        value={contador}
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
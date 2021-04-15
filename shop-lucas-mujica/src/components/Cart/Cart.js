/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useCart} from '../../context/CartContext'

export const Cart = () => {
  const {cart, removeItem, totalItems, totalPrecio, clear} = useCart()

  return (
    <div>
      {!cart.length ? (
        <h2>
          No hay items en el carrito <Link to='/'>Ir al home</Link>
        </h2>
      ) : (
        <>
          {cart.map((cartItem) => (
            <div key={cartItem.item.id}>
              <div>Titulo: {cartItem.item.name}</div>
              <div>cantidad: {cartItem.quantity}</div>{' '}
              <button onClick={() => removeItem(cartItem.item.id)}>
                Borrar
              </button>
            </div>
          ))}
          <div>
            Total: {totalItems} y {totalPrecio}
            <button onClick={clear}>Eliminar todos los items</button>
          </div>
        </>
      )}
    </div>
  )
}

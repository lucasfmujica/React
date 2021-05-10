/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable no-undef */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Cart.css'
import Button from '@material-ui/core/Button'
import {useCart} from '../../context/CartContext'
import {createOrder} from '../../services/ordersService'
import {ItemCount} from '../ItemCount'
import {CartItemCount} from '../CartItemCount'

export const Cart = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [email2, setEmail2] = useState('')

  const history = useHistory()

  const {cart, removeItem, totalItems, totalPrecio, clear, addItem} = useCart()

  const guardarOrden = (e) => {
    e.preventDefault()
    const buyer = {name, phone, email}

    const items = cart.map((cartItem) => ({
      id: cartItem.item.id,
      title: cartItem.item.name,
      price: cartItem.item.price,
      quantity: cartItem.quantity,
    }))

    const order = {buyers: buyer, items, total: totalPrecio}
    createOrder(order).then((orderCreated) => {
      clear()
      history.push(`/orders/${orderCreated.id}`)
    })
  }

  return (
    <div className='cartContainer'>
      {!cart.length ? (
        <h2 className='emptyCart'>
          No hay items en el carrito,{' '}
          <Link to='/' className='cartLink'>
            haz click aqui para volver al inicio
          </Link>
        </h2>
      ) : (
        <>
          {cart.map((cartItem) => (
            <div className='c-section cc-cart'>
              <div className='c-container cc-10-cols'>
                <div key={cartItem.item.id} className='c-cart-item'>
                  <div className='c-cart-img-container'>
                    <div className='c-cartitem-img'>
                      <img alt='' src={cartItem.item.pictureUrl} />
                    </div>
                  </div>
                  <div className='c-cartitem-info-container'>
                    <div className='c-cartitem-title'>
                      <h3>{cartItem.item.name}</h3>
                    </div>
                    <div className='cart-quantity-contain'>
                      <CartItemCount stock={cartItem.item.quantity} />
                    </div>
                    <p className='quantity'>Precio: ${cartItem.item.price}</p>

                    <Button
                      onClick={() => removeItem(cartItem.item.id)}
                      variant='contained'
                      color='primary'
                    >
                      Borrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='total'>
            <p>
              La cantidad que llevás es: {totalItems} productos y el precio
              total de tu compra es: ${totalPrecio}
            </p>
            <Button onClick={clear} variant='contained' color='primary'>
              Eliminar todos los items
            </Button>
          </div>
          <form action='' onSubmit={guardarOrden}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <input
              type='number'
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type='text'
              placeholder='Reitere su Email'
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            />
            <Button
              variant='contained'
              color='primary'
              type='submit'
              disabled={
                !!(
                  !name ||
                  !lastName ||
                  !phone ||
                  !email ||
                  !email2 ||
                  !(email === email2)
                )
              }
            >
              Generar orden
            </Button>
          </form>
        </>
      )}
    </div>
  )
}

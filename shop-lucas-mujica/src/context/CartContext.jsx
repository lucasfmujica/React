/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'

const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addItem = (newItem, newQuantity) => {
    const {item = null, quantity = 0} =
      cart.find((e) => e.item.id === newItem.id) || {}
    console.log(item, quantity)

    const newCart = cart.filter((e) => e.item.id !== newItem.id)

    setCart([...newCart, {item: newItem, quantity: quantity + newQuantity}])
  } // agregar cierta cantidad de un ítem al carrito

  const removeItem = (itemId) => {
    const newCart = cart.filter((e) => e.item.id !== itemId)
    setCart(newCart)
  } // Remover un item del cart por usando su id

  const clear = () => {
    setCart([])
  } // Remover todos los items

  const isInCart = (id) => {
    const currentItem = cart.find((e) => e.item.id === id)

    return !!currentItem
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe estar dentro de CartContext')
  }
  return context
}

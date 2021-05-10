/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, {useState} from 'react'
import './CartItemCount.css'

export const CartItemCount = (stock) => {
  const [counter, setCounter] = useState(1)

  const acumular = (numero: number) => {
    setCounter(counter + numero)
  }
  const onAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  return (
    <>
      <h3>
        Contador <small>{counter}</small>
      </h3>
      <button
        className='btn btn-primary'
        onClick={() => acumular(-1)}
        disabled={counter === 1}
      >
        -1
      </button>
      &nbsp;
      <button
        className='btn btn-primary'
        onClick={() => {
          onAdd()
        }}
        disabled={counter === stock}
      >
        +1
      </button>
    </>
  )
}

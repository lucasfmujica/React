/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import {useState, useEffect} from 'react'
import './style.css'

export const ItemCount = ({stock, value, onChange}) => {
  const [contador, setContador] = useState(value)

  const onAdd = () => {
    if (contador < stock) {
      setContador(contador + 1)
    } else {
      alert('No tenemos mas stock!!!')
    }
  }

  const onSubstract = (stock) => {
    if (contador > 1) {
      setContador(contador - 1)
    } else {
      alert('El valor es menor a lo que podemos vender')
    }
  }

  useEffect(() => {
    onChange(contador)
  }, [contador, onChange])

  return (
    <>
      <button
        className='btn btn-primary'
        onClick={onSubstract}
        disabled={contador === 1}
      >
        -
      </button>
      <b className='contador'>{contador}</b>
      <button
        className='btn btn-primary'
        onClick={() => {
          onAdd()
        }}
        disabled={contador === stock}
      >
        +
      </button>
    </>
  )
}

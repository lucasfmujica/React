/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import {getProduct} from '../../services/productsService'

export default function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(false)
  const [item, setItem] = useState(null)
  const {itemId} = useParams()

  useEffect(() => {
    setIsLoading(true)
    getProduct(itemId).then((product) => {
      setItem(product)
      setIsLoading(false)
    })
  }, [itemId])

  if (isLoading) {
    return <h2 className='loading'>Cargando producto...</h2>
  }

  return <ItemDetail item={item} />
}

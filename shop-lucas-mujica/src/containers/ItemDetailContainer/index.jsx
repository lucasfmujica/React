import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/ItemDetail'
import {getProduct} from '../../mocks/productService'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(false)
  const [item, setItem] = useState(null)
  const {itemId} = useParams()

  useEffect(() => {
    setIsLoading(true)

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getProduct(itemId))
      }, 2000)
    })

    myPromise.then((result) => {
      setItem(result)
      setIsLoading(false)
    })
  }, [itemId])

  if (isLoading) {
    return <h2 className='loading'>Cargando producto...</h2>
  }

  return <ItemDetail item={item} />
}

/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import {getProduct} from '../../mocks/productService'
import {getFirestore} from '../../firebase'

const getItems = (id) => {
  const db = getFirestore()
  const itemCollection = db.collection('items')

  const item = itemCollection.doc(id)
  return item.get()
}

export default function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(false)
  const [item, setItem] = useState(null)
  const {itemId} = useParams()

  useEffect(() => {
    setIsLoading(true)
    getItems(itemId).then((result) => {
      console.log('existe?', result.exists)
      if (result.exists) {
        setItem(result.data())
      }
      setIsLoading(false)
    })
  }, [itemId])

  if (isLoading) {
    return <h2 className='loading'>Cargando producto...</h2>
  }

  return <ItemDetail item={item} />
}

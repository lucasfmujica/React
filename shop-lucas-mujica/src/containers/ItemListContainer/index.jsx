/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import '../../App.css'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList'
import {getProducts} from '../../mocks/productService'
import {getFirestore} from '../../firebase'
import './loading.css'

const ItemListContainer = () => {
  const {categoryId} = useParams()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const db = getFirestore()
    const itemCollection = db.collection('items')
    const myPromise = itemCollection.get()

    myPromise.then((snapshot) => {
      console.log('se consultaron los datos')
      console.log(snapshot)

      if (snapshot.size > 0) {
        console.log(snapshot.docs.map((doc) => doc.data()))
        console.log(snapshot.docs.map((doc) => doc.id))
        setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      }
      setIsLoading(false)
    })
  }, [categoryId])

  if (isLoading) {
    return <h2 className='loading'>Cargando productos...</h2>
  }

  return <ItemList products={products} />
}
export default ItemListContainer

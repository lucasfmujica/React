/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import '../../App.css'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList'
import {getProducts} from '../../services/productsService'
import './loading.css'

const ItemListContainer = () => {
  const {categoryId} = useParams()

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getProducts(categoryId).then((productList) => {
      setProducts(productList)
      setIsLoading(false)
    })
  }, [categoryId])

  if (isLoading) {
    return <h2 className='loading'>Cargando productos...</h2>
  }

  return <ItemList products={products} />
}
export default ItemListContainer

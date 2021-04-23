/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import 'firebase/firestore'
import firebase from 'firebase/app'
import {getFirestore} from '../firebase'

const db = getFirestore()
const itemCollection = db.collection('items')

export function getProducts(categoryId) {
  let productsQuery
  if (categoryId) {
    productsQuery = itemCollection.where('category', '==', categoryId)
  } else {
    productsQuery = itemCollection
  }

  return productsQuery.get().then((snapshot) => {
    if (snapshot.size > 0) {
      return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    }
    return []
  })
}

export function getProduct(id) {
  return itemCollection
    .doc(id)
    .get()
    .then((product) => {
      if (product.exists) {
        const productData = product.data()
        return {
          ...productData,
          id,
        }
      }
      return {}
    })
}

export function removeFromStocks(order) {
  const batch = db.batch()
  const itemsToUpdate = itemCollection.where(
    firebase.firestore.FieldPath.documentId(),
    'in',
    order.items.map((item) => item.id),
  )
  return itemsToUpdate.get().then((result) => {
    for (const document of result.docs) {
      const actualStock = document.data().stock
      const itemOfOrder = order.items.find(
        (orderItem) => orderItem.id === document.id,
      )
      const quantityBuyed = itemOfOrder.quantity
      const newStock = actualStock - quantityBuyed

      batch.update(document.ref, {stock: newStock})
    }

    batch.commit()
    return order
  })
}

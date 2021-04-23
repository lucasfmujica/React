/* eslint-disable import/prefer-default-export */
import React, {useEffect, useState} from 'react'
import './orders.css'
import {useParams, Link} from 'react-router-dom'
import {getOrders} from '../../services/ordersService'

export function Orders() {
  const [orders, setOrders] = useState([])
  const {orderId} = useParams()
  const [currentOrder, setCurrentOrder] = useState({})

  useEffect(() => {
    getOrders().then((orderList) => {
      setOrders(orderList)
    })
  }, [])
  useEffect(() => {
    if (orders.length) {
      setCurrentOrder(orders.find((o) => o.id === orderId))
    }
  }, [orderId, orders])

  return (
    <>
      <div className='orders'>
        <h4>Mis ordenes</h4>
        {!orderId && (
          <div>
            <ul>
              {orders.map((o) => (
                <li key={o.id}>
                  {' '}
                  <Link to={`/orders/${o.id}`}>{o.id}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {orderId && <code>{JSON.stringify(currentOrder)}</code>}
      </div>
    </>
  )
}

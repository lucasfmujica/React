/* eslint-disable react/prop-types */
import React from 'react'
import {AddToCart} from '../AddToCart'
// import {Link} from "react-router-dom";
import './itemDetail.css'

export default function ItemDetail({item}) {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        <div className='p-2 mt-2 text-center card bg-dark animate__animated animate__fadeInUp'>
          <div className='overflow'>
            <img
              src={item?.pictureUrl}
              alt='img'
              className='card-img-top'
              style={{width: '18rem', maxHeight: '250px'}}
            />
          </div>
          <div className='card-body text-light'>
            {/* <!-- Datos del vendedor y titulo del producto --> */}
            <h5 className='card-title'>{item?.name}</h5>
            {/* <!-- Precios --> */}
            <h6>Precio en oferta</h6>
            <h5 className='mt-3 text-secondary'>${item?.price}</h5>
            <h5 className='mt-2 text-secondary'>Cantidad</h5>
            <AddToCart product={item} />
            <h5 className='mt-2 text-secondary'>Detalle del producto</h5>
            <h6 className='mt-2 text-secondary'>{item?.description}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

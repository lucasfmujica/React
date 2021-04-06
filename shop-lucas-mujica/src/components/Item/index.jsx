/* eslint-disable react/prop-types */
import React from 'react'
import './card.css'

const Item = ({product}) => (
  <div className='p-2 mt-2 text-center card bg-dark animate__animated animate__fadeInUp'>
    <div className='overflow'>
      <img
        src={product.pictureUrl}
        alt=''
        className='card-img-top'
        style={{
          width: '18rem',
          minHeight: '200px',
          maxHeight: '200px',
        }}
      />
    </div>
    <div className='card-body text-light'>
      <h5 className='card-title'>{product.name}</h5>
      <div className='price text-success'>
        <h5 className='mt-3 text-secondary'>Price: ${product.price}</h5>
        <h5 className='mt-2 text-secondary'>Stock: {product.stock}</h5>
      </div>
    </div>
  </div>
)

export default Item

import React from 'react'
import AddtoCart from './AddtoCart'

const ProductCard = () => {
  return (
    <div className='p-5 border rounded-lg border-gray-500 text-yellow-100 text-2xl text-bolder bg-pink-300 hover:bg-pink-500'>
      Product Card
      <AddtoCart />
    </div>
  )
}

export default ProductCard
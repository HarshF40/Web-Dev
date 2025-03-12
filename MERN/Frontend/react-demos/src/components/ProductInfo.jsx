import React from 'react'

const ProductInfo = () => {

  const product = {
    name : "Laptop",
    price : "$1200",
    availabilty : "In Stock"
  }

  return (
    <div>
      <p>
    Name : {product.name}
    Price : {product.price}
    Availibility : {product.availabilty}
    </p>
    </div>
  )
}

export default ProductInfo

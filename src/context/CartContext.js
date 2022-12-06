import React from 'react'

// first we create the createcontext and intialize the cartList and add,delete methods

const CartContext = React.createContext({
  // step 1 display the cartlist using the cartContext

  cartList: [
    {
      title: 'Product 1',
      brand: 'Brand Name',
      id: 1001,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 5,
    },
    {
      title: 'Product 2',
      brand: 'Brand Name',
      id: 1002,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 2,
    },
  ],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext

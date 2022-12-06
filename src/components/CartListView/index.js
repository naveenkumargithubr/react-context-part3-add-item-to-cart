import CartContext from '../../context/CartContext' // step 1 display the cartlist in this step we import the cartContext.
import CartItem from '../CartItem'

import './index.css'

// now the jsx element is enclosed with in the CartContext.Consumer (for accessing the cartlist)
const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView

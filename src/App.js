import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

// step 2 to update the context using the provider
import CartContext from './context/CartContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  // here we initializing the cartlist
  state = {cartList: []}

  // step3 finally we add a item to the cart by updating the addCartItem
  // product has been passed as an argument
  addCartItem = product => {
    this.setState(prevState => ({
      cartList: [...prevState.cartList, product],
    }))
  }

  deleteCartItem = () => {}

  render() {
    // now get the cartlist from the state

    const {cartList} = this.state

    return (
      <BrowserRouter>
        <CartContext.Provider
          // step2 using the provider we update the context method what we wrote in the context
          value={{
            cartList, // new cartList has been passed here
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App

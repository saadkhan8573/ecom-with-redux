import React from 'react'
import Header from './components/products/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './components/products/ProductListing';
import ProductDetails from './components/products/ProductDetails';
import ErrorPage from './components/error/ErrorPage';
import Cart from './components/products/cart/Cart';
import Testing from './components/Testing';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route path="/add-to-cart" exact component={Cart} />
          <Route path="/testing" exact component={Testing} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>

    </>
  )
}

export default App

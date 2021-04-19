/* eslint-disable react/no-children-prop */
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './containers/ItemListContainer'
import './App.css'
import Footer from './components/Footer'
import {CartProvider} from './context/CartContext'
import Hero from './components/HeroSection'
import ItemDetailContainer from './containers/ItemDetailContainer'
import {Cart} from './components/Cart/Cart'

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Hero
                title='Adquirí el producto que necesitás'
                subTitle='Vendemos los mejores celulares, notebooks, tablets y cualquier otro hardware que necesites.'
              />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route path='/Category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route path='/Item/:itemId'>
              <ItemDetailContainer />
            </Route>
            <Route path='*' children={<div>Not found</div>} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App

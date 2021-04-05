import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar/'
import ItemListContainer from './containers/ItemListContainer'
import './App.css'
import Footer from './components/Footer'

import ItemDetailContainer from './containers/ItemDetailContainer'
import CartContainer from './containers/CartContainer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/cart'>
            <CartContainer />
          </Route>
          <Route path='/Category/:categoryId'>
            <ItemListContainer />
          </Route>
          <Route path='/Item/:itemId'>
            <ItemDetailContainer />
          </Route>
          <Route path='*' children={<div>Not found</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

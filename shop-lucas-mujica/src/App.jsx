import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              Hola
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
          </Switch>
          <Footer />
          <Route path="*">404</Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

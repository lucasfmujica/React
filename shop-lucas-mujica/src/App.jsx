import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { ConcatenationScope } from "webpack";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/items">
            <ItemListContainer />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

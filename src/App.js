import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Products from './pages/Products';
import Books from './pages/Books';
import Home from './pages/Home';
import Navigation from './Navigation';
import { useState, useEffect } from "react"
import axios from "axios";
import { Row, Alert, Col, Container, } from "react-bootstrap"

function App() {

  return (
    <>
      <Router>
        {/* <Navigation /> */}
        <Navigation />
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            {/* // cuando accedo a raiz, aparece un componente que dice Bienvenido */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

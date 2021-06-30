import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./pages/check-out/Checkout";
import Login from "./pages/login/Login";
function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
        <Route  exact path="/"> 
        <Header />
          <Home/>
          </Route>
          <Route path="/login">
<Login/>
          </Route>
          <Route path="/checkout">
          <Header />
          <Checkout/>
          </Route>
         
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

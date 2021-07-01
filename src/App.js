import React,{useEffect} from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./pages/check-out/Checkout";
import Login from "./pages/login/Login";
import { auth } from "./firebase-base";
import { useStateValue } from "./state-provider/StateProvider";
import Footer from "./components/footer/Footer";
import Payment from "./pages/payment/Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THIS IS USER>>>", authUser);
      if (authUser) {
        // user is just logged in/ already logged in
        dispatch({
          type: "SET_USER",
          user:authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
         <Payment/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <ToastContainer />
          <NavBar>
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Dashboard" component={Dashboard} />
              <Redirect from="/" exact to="/Home" />
              <Redirect to="/not-found" />
            </Switch>
          </NavBar>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/common/PrivateRoute";
import CreatePortfolio from "./components/create-portfolio/CreatePortfolio";
import AddCurrency from "./components/add-wealth/AddCurrency";
import AddCryptoCurrency from "./components/add-wealth/AddCryptoCurrency";
import AddStock from "./components/add-wealth/AddStock";

import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-portfolio"
                  component={CreatePortfolio}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-currency"
                  component={AddCurrency}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-crypto-currency"
                  component={AddCryptoCurrency}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-stock" component={AddStock} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

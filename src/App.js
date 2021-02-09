import React from 'react'; 
import Layout from './Componets/Layouts/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Componets/Checkout/Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import appManager from './manageApp.js';
import Order from "./Componets/Orders/order"

let manageApp = new appManager();

function App(props) {

  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/">
              <Layout>
                <BurgerBuilder appManagement = {manageApp}/>
              </Layout>
            </Route>
            <Route exact path="/Checkout">
              <Layout>
                <Checkout appManagement = {manageApp} />
              </Layout>
            </Route>
            <Route exact path="/Orders">
              <Layout>
                <Order appManagement = {manageApp} />
              </Layout>
            </Route>

          </Switch>
      </div>

    </Router>   
  );
}

export default App;

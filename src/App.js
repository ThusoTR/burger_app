import React from 'react'; 
import Layout from './Componets/Layouts/Layout'
import {BurgerBuilder, order_details} from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Componets/Checkout/Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import appManager from './manageApp.js';


let manageApp = new appManager();

function App(props) {

  console.log("Order details: " + manageApp.ingredients)

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
                <Checkout appManagement = {manageApp} state = {order_details}/>
              </Layout>
            </Route>

          </Switch>
      </div>

    </Router>   
  );
}

export default App;

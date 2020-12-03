import React from 'react'; 
import Layout from './Componets/Layouts/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Componets/Checkout/Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/">
              <Layout>
                <BurgerBuilder/>
              </Layout>
            </Route>
            <Route exact path="/Checkout">
              <Layout>
                <Checkout/>
              </Layout>
            </Route>

          </Switch>
      </div>

    </Router>   
  );
}

export default App;

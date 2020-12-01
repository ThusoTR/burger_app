import React from 'react'; 
import Layout from './Componets/Layouts/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Componets/Checkout/Checkout'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
      <Checkout/>
    </div>
    
  );
}

export default App;

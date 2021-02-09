import React, {Component} from 'react'
import Aux from '../../hoc/Aux2'
import Burger from '../Burger/Burger'
                                                                                                                                                                                                                                                                                                      

class Checkout extends Component{
    checkoutCancel = () =>{

    }

    continueCheckout = () =>{

    }
    render(){
        let currentIngredients = this.props.appManagement.getIngredients()
        return(
        <Aux>
            {console.log("Ingredients in Burger Checkout = " + this.props.appManagement.ingredients)}
            <h1>Enjoy your Burger!!</h1>
            <Burger ingredients = {currentIngredients}/>
            <div>
                <button>Cancel</button>
                <button >Continue</button>
            </div>

            <div>
                <h1>Enter your contact data</h1>
                <form>
                  <input name = "userName" type="text" placeholder = "Enter your name"></input>
                  <input name = "userEmail"type="email" placeholder = "Enter your email address"></input>
                  <input name = "userAddress" type="text" placeholder = "Enter your street address"></input>
                  <input name = "postCode" type="text" placeholder = "Enter your postal code"></input>  
                </form>
                <button >Continue</button>
            </div>
            
        </Aux>
        )
    }
}

export default Checkout
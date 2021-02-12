import React, {Component} from 'react'
import Aux from '../../hoc/Aux2'
import Burger from '../Burger/Burger'
import Styles from './Checkout.module.css'
import { withRouter } from "react-router-dom";
                                                                                                                                                                                                                                                                                                     

class Checkout extends Component{
    state = {
        checkOutContinue: false,
        submiOrder: false,
    }

    CheckOutForm = (            
    <div className = {Styles.CheckoutForm}>
        <div>
        <h2>Enter your contact data</h2>
            <div>
                <form>
                    <input name = "userName" type="text" placeholder = "Enter your name"></input>
                    <input name = "userEmail"type="email" placeholder = "Enter your email address"></input>
                    <input name = "userAddress" type="text" placeholder = "Enter your street address"></input>
                    <input name = "postCode" type="text" placeholder = "Enter your postal code"></input>  
                </form>
                <button onClick = {() => (this.continueCheckout())}>Submit Order</button>
                <button onClick = {() => (this.checkoutCancel())} >Cancel Order</button>
            </div>
        </div>
    </div>)
    
    checkoutCancel = () =>{
        this.props.history.push('/')
    }

    continueCheckout = () =>{
        this.setState({checkOutContinue: true})
    }
    render(){
        let currentIngredients = this.props.appManagement.getIngredients()
        return(
        <Aux>
            <div className = {Styles.CheckoutForm}>
                <div className = {Styles.BurgerContainer}>
                    
                    {console.log("Ingredients in Burger Checkout = " + this.props.appManagement.ingredients)}
                    <h2>Enjoy your Burger!!</h2>
                    <Burger ingredients = {currentIngredients}/>
                    {!this.state.checkOutContinue ? (                    
                    <div>
                        <button onClick = {() => (this.checkoutCancel())}>Cancel</button>
                        <button onClick = {() => (this.continueCheckout())}>Continue</button>
                    </div>)
                    : null}

                </div>
            </div>
             {this.state.checkOutContinue ? this.CheckOutForm : null}
        </Aux>
        )
    }
}

export default withRouter(Checkout)
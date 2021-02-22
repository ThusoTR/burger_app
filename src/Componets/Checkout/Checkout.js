import React, {Component} from 'react'
import Aux from '../../hoc/Aux2'
import Burger from '../Burger/Burger'
import Styles from './Checkout.module.css'
import { withRouter } from "react-router-dom";
                                                                                                                                                                                                                                                                                                     

class Checkout extends Component{
    state = {
        checkOutContinue: false,
        submiOrder: false,
        userName: null,
        userEmail: null,
        userAddress: null,
        postalCode: null,
        invalidForm: false,
        formErrorMsg: null, 
        SubmitInProgress: false,
    }

    CheckOutForm = (            
    <div className = {Styles.CheckoutForm}>
        <div>
        <h2>Enter your contact data</h2>
            <div>
                <form>
                    <input 
                    onChange = {(event) => (this.handleFormInputs(event))} 
                    value={this.state.value}
                    name = "userName" type="text" placeholder = "Enter your name"></input>
                    <input
                    onChange = {(event) => (this.handleFormInputs(event))} 
                    value={this.state.value}
                    name = "userEmail" 
                    type="email" placeholder = "Enter your email address"
                    >   
                    </input>

                    <input 
                    onChange = {(event) => (this.handleFormInputs(event))} 
                    value={this.state.value}
                    name = "userAddress" type="text" placeholder = "Enter your street address"></input>
                    
                    <input
                    onChange = {(event) => (this.handleFormInputs(event))} 
                    value={this.state.value}
                     name = "postalCode" type="text" placeholder = "Enter your postal code"></input>  
                </form>
                <button onClick = {() => (this.saveOrder())}>Submit Order</button>
                <button onClick = {() => (this.checkoutCancel())} >Cancel Order</button>
            </div>
        </div>
    </div>)
    
    checkoutCancel = () =>{
        this.props.history.push('/')
    }
    validateForm = () =>
    {
        
        let errorMSG = ""
        if (this.state.userName === null || this.state.userName.length < 5)
        {
            errorMSG = "Enter username of at least 5 characters."
            this.setState({invalidForm: true,
                formErrorMsg: errorMSG})
            return false
        }

        else if (this.state.userEmail === null)
        {
            errorMSG = "Enter a valid email address of at least 5 characters."
            this.setState({invalidForm: true,
                formErrorMsg: errorMSG})
            return false
        }
        else if (this.state.userAddress === null || this.state.userAddress.length < 5)
        {
            errorMSG = "Enter street address of at least 5 characters."
            this.setState({invalidForm: true,
                formErrorMsg: errorMSG})
            return false
        }
        else if (this.state.postalCode === null || this.state.postalCode.length < 4)
        {
            errorMSG = "Enter postal Code of at least 4 characters."
            this.setState({invalidForm: true,
                formErrorMsg: errorMSG})

            return false
        }
        
        if (this.state.invalidForm)
            this.setState({invalidForm: false})

        return true
    }
    continueCheckout = () =>{
        this.setState({checkOutContinue: true})
    }
    saveOrder = () =>
    {
        if(this.validateForm())
            this.setState({
                SubmitInProgress: true,
                checkOutContinue: false,
            })
    }
    handleFormInputs = (event) =>{     
        let inputName = event.target.name;
        let inputValue = event.target.value;

        this.setState({[inputName]: inputValue})
    }

    render(){
        let currentIngredients = this.props.appManagement.getIngredients()
        return(
        <Aux>
            <div className = {Styles.CheckoutForm}>
                <div className = {Styles.BurgerContainer}>
                    
                    {/* {console.log("Ingredients in Burger Checkout = " + this.props.appManagement.ingredients)} */}
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
            {this.state.invalidForm ? 
            <h4>{this.state.formErrorMsg}</h4> : null}
            {this.state.checkOutContinue ? this.CheckOutForm : null}
            {this.state.SubmitInProgress ? 
                
                <div className = {Styles.loader}>
                    Loading...
                </div>
            : null}
             
        </Aux>
        )
    }
}

export default withRouter(Checkout)
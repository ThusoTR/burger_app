import React, {Component} from 'react'
import Aux from '../../hoc/Aux2'
import Burger from '../Burger/Burger'
                                                                                                                                                                                                                                                                                                      

class Checkout extends Component{
    checkoutCancel = () =>{

    }

    continueCheckout = () =>{

    }
    render(){
        return(
        <Aux>
            {console.log("Ingredients in Burger Checkout = " + this.props.appManagement.ingredients)}
            <h1>Enjoy your Burger!!</h1>
            <Burger/>
            <div>
                <button>Cancel</button>
                <button >Continue</button>
            </div>
            
        </Aux>
        )
    }
}

export default Checkout
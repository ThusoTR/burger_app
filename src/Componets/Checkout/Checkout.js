import React, {Component} from 'react'
import Aux from '../../hoc/Aux2'
import Burger from '../Burger/Burger'

class Checkout extends Component{
    render(){
        return(
        <Aux>
            <h1>Enjoy your Burger!!</h1>
            <Burger/>
        </Aux>
        )
    }
}

export default Checkout
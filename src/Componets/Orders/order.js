import React, {Component} from 'react'
import Aux from "../../hoc/Aux2"

class Orders extends Component{
    ordersJSX = [];
    setOrderJSX = () =>
    {
        let allOrdersRetrived = this.props.appManagement.allOrders

        let i = 0;
        for (const property in allOrdersRetrived) {
            console.log(`${i} ${property}: ${allOrdersRetrived[property]}`);

            this.ordersJSX.push(
                <div>
                        <h1> Order key = {property} </h1>
                </div>
            )
            console.log(`length = ${this.ordersJSX.length}`)

            i++
          }
    }
    componentDidMount = () =>
    {
        if(!this.props.appManagement.retrievedAllOrders)
        {
            console.log("retriving all orders")
            this.props.appManagement.allOrdersretrieval(this.setOrderJSX);
        }
        else
        {
            console.log("Orders already received")
            this.setOrderJSX()
        }

    }
    render(){
        console.log(`length = ${this.ordersJSX.length}`)
        return (
            <Aux>
                <h1>List all orders</h1>
                {this.ordersJSX}
            </Aux>
        )
    }
}

export default Orders
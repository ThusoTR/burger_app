import React, {Component} from 'react'
import Aux from "../../hoc/Aux2"
import styles from "./order.module.css"

class Orders extends Component{
    state = {
        ordersJSX: [],
    }
    
    setOrderJSX = () =>
    {
        let allOrdersRetrived = this.props.appManagement.allOrders
        let ordersJSXTemp = []
        
        for (const property in allOrdersRetrived) {
            ordersJSXTemp.push(
                <div key = {property} className = {styles.order}>
                    <h4> Order key = {property} </h4>
                    <p>Orderd by: {allOrdersRetrived[property].name}</p>
                    <p>order date:  {allOrdersRetrived[property].time}</p>
                    <p>Ingredients: Bacon = {allOrdersRetrived[property].ingredients.Bacon};
                    Cheese = {allOrdersRetrived[property].ingredients.Cheese};
                    Meat = {allOrdersRetrived[property].ingredients.Meat};
                    Salad = {allOrdersRetrived[property].ingredients.Salad};</p>
                    <p>Delivery priority level: {allOrdersRetrived[property].priority}</p>
                </div>
            )
          }

          this.setState({ordersJSX: ordersJSXTemp})
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
        return (
            <Aux>
                <h1>List all orders</h1>
                {this.state.ordersJSX}
            </Aux>
        )
    }
}

export default Orders
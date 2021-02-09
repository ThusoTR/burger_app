import React, {Component} from 'react'
import Aux from '../../hoc/Aux2'
import Burger from '../../Componets/Burger/Burger'
import Ingre_Adder from '../../Componets/Burger/BuildControls/Ingre_Adder'
import Modal from '../../Componets/modal/modal'
import Backdrop from '../../Componets/modal/backdrop'
import Styles from './BurgerBuilder.module.css'
import { withRouter } from "react-router-dom";

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            Bacon: 0,
            Salad: 0, 
            Cheese: 0,
            Meat: 0,
        },
        order_initiated: false,
    }
    componentDidMount(){
        if(!this.props.appManagement.userUpdateBurger)
        {
            this.props.appManagement.retrieveIntialIngridents(this.updateIngredients)
            this.props.appManagement.setIngredients(this.state.ingredients)
        }
        else{
            let currentIngredients = this.props.appManagement.getIngredients()

            this.updateIngredients(currentIngredients)
        }
    }
    updateIngredients = (newIngredients) =>{

             this.setState((state)=>{
                console.log("update ingredients")
               return {ingredients: newIngredients}
           })
        }
    burger_price = 90;
    disable_button = { 
                        Bacon: true,
                        Salad: true, 
                        Cheese: true,
                        Meat: true,
                        Bacon_more: false,
                        Salad_more: false, 
                        Cheese_more: false,
                        Meat_more: false,
                    }
    prices = {
        Bacon: 4,
        Salad: 1, 
        Cheese: 2,
        Meat: 3,
    }
    Save_Order = () =>{
        this.props.history.push("/Checkout");
    }
    modal_contents = () =>{
        
       return (

           <div>
               <h3>Your Order Summary:</h3>
               <ul>
                   <li>Salad: {this.state.ingredients.Salad}</li>
                   <li>Bacon: {this.state.ingredients.Bacon}</li>
                   <li>Cheese: {this.state.ingredients.Cheese}</li>
                   <li>Meat: {this.state.ingredients.Meat}</li>
               </ul>
               <h3>Price = R {this.burger_price}</h3>
               <p>Continue to checkout?</p>
               <button onClick = {() => this.order_toggle()}>Cancel</button>
               <button onClick = { () => this.Save_Order()}>Continue with order</button>
           </div>
       ) 
    }
    calculate_price = () => {
        this.burger_price = 90
        for(let x in this.prices){
            this.burger_price = this.burger_price + this.prices[x]*this.state.ingredients[x];
            console.log("  nn " + this.state.ingredients[x])
        }
    }
    
    add_ingre_ = (type, add) => {
        let sum_of_type = this.state.ingredients[type]
        add ?  sum_of_type++ : sum_of_type--
        let button_ingredient = type + '_more'
        if(sum_of_type < 0 || sum_of_type > 3 ) 
            return
        else if (sum_of_type == 0 )
            this.disable_button[type] = true;
            
        else if(sum_of_type == 3)
            this.disable_button[button_ingredient] = true;
        else{
            this.disable_button[type] = false;
            this.disable_button[button_ingredient] = false;
        }

        let dummy_list = {...this.state.ingredients}
        dummy_list[type] = sum_of_type
        this.setState({ingredients: dummy_list})
        this.calculate_price()

        this.props.appManagement.ingredients = this.state.ingredients
        this.props.appManagement.setIngredients(this.state.ingredients)
    }
    
    order_toggle = () => this.setState({order_initiated: !this.state.order_initiated})
    render(){{}

        return(
            <Aux>
                <div className = {Styles.align_layout}>
                <Burger ingredients = {this.state.ingredients}/>
                    <div className = {Styles.controls}>
                        <div>
                        <p>Total price: {this.burger_price} rands</p>
                        </div>
                        
                        <div>
                            <Ingre_Adder enable_status = {this.disable_button} add_method = {this.add_ingre_}
                            order_now = {() => {this.order_toggle()}}/>
                        </div>
                        
                    </div>
                    
                {this.state.order_initiated ? <Modal>{this.modal_contents()}</Modal> : null}
                {this.state.order_initiated? <Backdrop hide = {() => {this.order_toggle()}} show = {true}></Backdrop>: null}

                </div>
            </Aux>
        )
    }
}

export default withRouter(BurgerBuilder)
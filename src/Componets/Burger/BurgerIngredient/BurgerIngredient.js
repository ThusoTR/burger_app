import React, {Component} from 'react'
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component{
    render(){

    let ingredient = null
    switch(this.props.type){
        case ('Bread-Bottom'):
            ingredient = <div className = {classes.BreadBottom}></div>
            break;
        case ('Bread-Top'):
            ingredient = <div className = {classes.BreadTop}></div>
            break;
        case ('Seeds1'):
            ingredient = (
            <div className = {classes.Seeds1}></div>
            )
            break;
        case ('Seeds2'):
            ingredient = (
            <div className = {classes.Seeds2}></div>
            )
            break;
        case ('Meat'):
            ingredient = <div className = {classes.Meat}></div>
            break;
        case ('Cheese'):
            ingredient = <div className = {classes.Cheese}></div>
            break;
        case ('Salad'):
            ingredient = <div className = {classes.Salad}></div>
            break;
        case ('Bacon'):
            ingredient = <div className = {classes.Bacon}></div>
            break;   
        default:
            ingredient = null; 
    }
    return ingredient
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient
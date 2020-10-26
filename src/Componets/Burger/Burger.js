import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import LoaderStyle from './loader.module.css'

const remove_ingredient = (list_of_ingredients, index) => {
    list_of_ingredients.splice(index)
}
const LoadDisplay = (props) =>{
    return(
        <div className={LoaderStyle.loader}>Loading...</div>
    )
}
const Burger = (props)=>{
    let ingredients_list = [];
    let count_key = 0;
    for (let ingredient_name in props.ingredients){

        for(let i = 0; i < props.ingredients[ingredient_name]; i++)
        {
            ingredients_list.push((<BurgerIngredient onClick = {remove_ingredient(ingredients_list, count_key)} 
                                    type = {ingredient_name} key = {count_key}/>))
            count_key++
        }

    }
    if (ingredients_list.length == 0)
        ingredients_list = (<LoadDisplay></LoadDisplay>)

    return(
        <div className= {classes.Burger}>
            <BurgerIngredient type = "Bread-Top"/>
            {ingredients_list}
            <BurgerIngredient type = 'Bread-Bottom'/>
        </div>
    )
}

export default Burger
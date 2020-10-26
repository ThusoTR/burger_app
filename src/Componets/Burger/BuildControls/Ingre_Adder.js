import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControls';
import styles from './Ingre_Adder.module.css'

const controls = [
    {label: 'Salad', type: 'Salad'},
    {label: 'Bacon', type: 'Bacon'},
    {label: 'Cheese', type: 'Cheese'},
    {label: 'Meat', type: 'Meat'},
]

const ingre_Adder = (props) =>(
    <div>
        <div className = {styles.controls}>
            {controls.map(ctrl=>(
                <BuildControl control_add_func = {props.add_method} type = {ctrl.type} key = {ctrl.label} 
                enable_status = {props.enable_status} label = {ctrl.label}/>
            ))}
            
        </div>
        
        <div className = {styles.orderButtonSection}>
            <button className = {classes.OrderButton} onClick = {props.order_now}>Order Now</button>
        </div>
        
    </div>
)

export default ingre_Adder
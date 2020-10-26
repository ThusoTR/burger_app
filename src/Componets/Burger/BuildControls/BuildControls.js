import React from  'react'
import classes from './BuildControls.module.css'


const buildControl = (props) =>(
    <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button  disabled = {props.enable_status[props.type]} onClick = {() => props.control_add_func(props.type, false)} className = {classes.Less}> Less</button>
        <button disabled = {props.enable_status[props.type + '_more']} onClick = {() => props.control_add_func(props.type, true)} className = {classes.More}>More</button>
    </div>
)

export default buildControl
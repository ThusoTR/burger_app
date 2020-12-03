import React from 'react'
import styles from './NavigationItem.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink 
} from "react-router-dom";

const navigationItem = (props) =>(
    <li className = {styles.NavigationItems}>
        <NavLink  to = {props.link} activeClassName = {styles.active}> 
            {props.children}
        </NavLink>
    </li>
)

export default navigationItem
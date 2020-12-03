import React from 'react'
import styles from './NavigationItems.module.css'
import Items from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className = {styles.NavigationItems}>
        <Items link = "/">Burger Builder</Items>
        <Items link = "/Checkout" >Checkout</Items>
    </ul>
)

export default navigationItems
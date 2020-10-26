import React from 'react'
import burger_logo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css'

const logo = (props) =>(
    <div className = {styles.Logo} sytle = {{height: props.height}}>
        <img src = {burger_logo} alt = ""/>
    </div>
)

export default logo
import React from 'react'
import styles from './toolbar.module.css'
import DrawerStyle from './DrawerToggle.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) =>(
    <header className = {styles.Toolbar}>
        <div onClick = {props.side_drawer_toggler} className = {DrawerStyle.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className = {styles.Logo}>
              <Logo />
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)
export default toolbar
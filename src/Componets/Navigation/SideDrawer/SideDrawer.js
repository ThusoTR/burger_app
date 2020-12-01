import React from 'react'
import Aux from '../../../hoc/Aux2'
import Logo from '../../Logo/Logo'
import NaviogationItems from '../NavigationItems/NavigationItems'

import styles from './SideDrawer.module.css'

const sideDrawer = (props) =>{
   let classes_side = [styles.SideDrawer, styles.Close]

   if (props.open){
    classes_side = [styles.SideDrawer, styles.Open]
   }
      return (
        <Aux>
          <div className = {classes_side.join(' ')}>
              <div className = {styles.Logo}>
              <Logo />
              </div>
              <nav>
                  <NaviogationItems/>
              </nav>
          </div>
        </Aux>
      )
}

export default sideDrawer
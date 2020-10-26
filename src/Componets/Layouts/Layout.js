import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Backdrop from '../modal/backdrop'

class Layout extends Component {
    state = {
        toggle: false,
    }
    toggle_sidedrawer = () =>{
        this.setState({toggle: !this.state.toggle})
    }
    render(){
        return(
            <Aux>
                <Toolbar side_drawer_toggler = {this.toggle_sidedrawer}></Toolbar>
                {this.state.toggle? <Backdrop show hide = {this.toggle_sidedrawer}/> : null}
                {this.state.toggle? <SideDrawer open/> : null}
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
            )
    }
}


export default  Layout

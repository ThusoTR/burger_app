import React from 'react'
import styles from './modal.module.css'

const modal = (props) =>{
    return (
        <div className = {styles.Modal}>
            <div>
                {props.children}
            </div>
            
        </div>
    )
}

export default modal
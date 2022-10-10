import React from 'react'
import classes from './formControl.module.css'

export const Element  = ({input, meta,  ...props}) =>{

    const hasError = meta.touched && meta.error

    return (
        <div  className={classes.validate + ' ' +   (hasError ? classes.error : '')}  >
            <div >
                < props.elementtype {...input} {...props} className={classes.validate + ' ' +   (hasError ? classes.error : '')}   />
            </div>
           
            <div>    
                { hasError && <span className={classes.error}> {meta.error} </span> }
            </div>
        </div>    
    )
}
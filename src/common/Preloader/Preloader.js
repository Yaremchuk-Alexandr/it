import React from 'react';
import preloader from '../../preloader/prelouder.svg'
import classes from '../../components/Users/users.module.css';


const Preloader = (props) =>{
    return <div >
                <img className={classes.preloader} src= {preloader} alt='Loading...'/>
            </div> 
}


export default Preloader
import React from "react";
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    // const onHandleClick = () =>{
    //     props.logOutMeThunk()
    // }


    return < div className={classes.header} >
                <img src='https://www.pngall.com/wp-content/uploads/10/Neo-Crypto-Logo-PNG-Pic.png'></img>
            {/* <div> */}
                <NavLink className={classes.login} to='/login'> 
                    {props.isAuth 
                        ? <>{props.login}  <button className={classes.logout} onClick={()=>props.logOutMeThunk()}>LOG OUT</button></>
                        : <button className={classes.logout} >LOG IN</button>
                    } 
                </NavLink> 
            {/* </div> */}
            </ div>
}

export default Header;